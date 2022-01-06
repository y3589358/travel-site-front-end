import React, {FormEvent, useRef, useState} from 'react';
import './SearchBox.scss';
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select, useOutsideClick
} from '@chakra-ui/react';
import { useForm } from "react-hook-form";
import {ChevronDownIcon, SearchIcon} from '@chakra-ui/icons';
import exampleTicket from './exampleTicket.png';
import MapPinIcon from '../../assets/icons/MapPinIcon.svg';
import TicketIcon from '../../assets/icons/TicketIcon.svg';
import FlagIcon from '../../assets/icons/FlagIcon.svg';
import ForkKnifeIcon from '../../assets/icons/ForkKnifeIcon.svg';
import {useNavigate} from 'react-router-dom';

const SearchBox: React.FC<SearchBoxProps> = (props) => {
  // navigate
  const navigate = useNavigate();
  
  const {
    register,
    formState: { errors },
  } = useForm();

  // input variables
  const [inputOpen, setInputOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [inputList, setInputList] = useState([
    {type: 'location', title: 'Beijing', location: 'Beijing,China'},
    {type: 'location', title: 'Beijing', location: 'Beijing,China'},
    {type: 'product', title: 'Admission to the Forbidden City', location: 'Beijing,China'},
    {type: 'product', title: 'Admission to the Forbidden City', location: 'Beijing,China'},
  ]);
  const inputRef = useRef(null);

  // select variables
  const [selectOpen, setSelectOpen] = useState(false);
  const [isInvalidIn, setValid] = useState(false);
  const [selectValue, setSelectValue] = useState('');
  const [selectList, setSelectList] = useState([
    {value: 'all', label: 'All Product categories'},
    {value: 'ticket', label: 'Attractions tickets'},
    {value: 'one-day', label: 'Day tour'},
    {value: 'featured', label: 'Special activities'},
    {value: 'food', label: 'local cuisine'},
    {value: 'travel', label: 'Local transportation'},
  ]);
  const selectRef = useRef<HTMLInputElement>(null);
  const [selectedLabel, setSelectedLabel] = useState(selectList[0].label);

  const onInputInput = (e: FormEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    setInputValue(value);
    if (value?.length >= 3) {
      setInputOpen(true);
    }
  };

  const onInputFocus = () => {
    setInputOpen(true);
  };

  const onInputBlur = () => {
    setInputOpen(false);
  };

  const onSelectClick = () => {
    setSelectOpen(true);
  };

  useOutsideClick({
    ref: selectRef,
    handler: () => setSelectOpen(false),
  });

  const onClickItem = (item: any) => {
    console.debug(item);
    if (item.type === 'product') {
      navigate('/products/1');
    } else if (item.type === 'location') {
      navigate('/location/bj');
    }
  };

  const onClickSearch = ()=> {
    if(inputValue){
      navigate('/search')
    }else{
      setValid(true);
      // navigate('/search/404')
    }
  }

  return <div className="search-box">
    <Popover
      isOpen={inputOpen}
      initialFocusRef={inputRef}
    >
      <PopoverTrigger>
        <InputGroup className="search-input-group">
          <InputLeftElement
            className="search-input-icon"
            pointerEvents="none"
            children={<SearchIcon color="gray.300"/>}
          />
          <Input
            ref={inputRef}
            className={["search-input", inputValue.length == 0 && isInvalidIn ? "is-invalid" : null].join(' ') }
            placeholder="Enter the city name to find the ideal destination"
            onInput={onInputInput}
            onFocus={onInputFocus}
            onBlur={onInputBlur}
          />
        </InputGroup>
      </PopoverTrigger>
      <PopoverContent className="location-popover-content">
        <ul className="location-list">
          {inputList
            .filter(d => !inputValue ? true : d.title.includes(inputValue))
            .map((d, i) => {
              let prefix = null;
              if (d.type === 'location') {
                prefix = <img src={MapPinIcon} style={{width: 24, height: 24}}/>;
              } else if (d.type === 'product') {
                prefix = <img src={exampleTicket}/>;
              }
              return <li key={i} className="location-item" onClick={() => onClickItem(d)}>
                <span className="location-icon">
                  {prefix}
                </span>
                <span className="location-title">{d.title}</span>
                <span className="location-location">{d.location}</span>
              </li>;
            })}
        </ul>
      </PopoverContent>
    </Popover>

    <Popover
      isOpen={selectOpen}
      initialFocusRef={selectRef}
    >
      <PopoverTrigger>
        <div
          className={["search-select-wrapper", selectOpen ? "active" : null].join(' ') }
          onClick={onSelectClick}
        >
          <div
            ref={selectRef}
            className="search-select"
          >
            {selectedLabel}
            <ChevronDownIcon w={12} h={7} color="#8B8B8B" className="dropdown-icon"/>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="category-popover-content">
        <ul className="category-list">
          {selectList
            .map((d, i) => {
              return <li key={i} className="category-item" onClick={() => setSelectedLabel(d.label)}>
                <span className="category-title">{d.label}</span>
              </li>;
            })}
        </ul>
      </PopoverContent>
    </Popover>

    <Button
      className="search-button"
      leftIcon={<SearchIcon/>}
      onClick={() => onClickSearch()}
    >
      Search
    </Button>
  </div>;
};

export default SearchBox;
