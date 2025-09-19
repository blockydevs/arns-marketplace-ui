import ArrowLeftIcon from '@/assets/icons/arrow-left.svg';
import { Button } from '@/components/button';
import { Paragraph } from '@/components/paragraph';
import { cn } from '@/utils/cn';

export interface GoBackHeaderProps {
  title: string;
  onGoBack?: () => void;
  className?: string;
}

export const GoBackHeader: React.FC<GoBackHeaderProps> = ({ title, onGoBack, className }) => (
  <div className={cn('ar:mx-auto ar:flex ar:max-w-6xl ar:items-center ar:justify-between ar:px-4', className)}>
    {onGoBack && (
      <Button variant="ghost" icon={<ArrowLeftIcon width={16} height={16} />} iconPlacement="left" onClick={onGoBack}>
        Back
      </Button>
    )}
    <Paragraph size="large" className="ar:mx-auto" fontWeight="medium">
      {title}
    </Paragraph>
    {onGoBack && <div className="ar:w-22" />}
  </div>
);
