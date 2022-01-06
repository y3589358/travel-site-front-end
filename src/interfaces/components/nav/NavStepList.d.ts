interface NavStepListProps {
  activeKey: string;
  steps: NavStep[];
}

interface NavStep {
  key: string | number;
  label: string;
}
