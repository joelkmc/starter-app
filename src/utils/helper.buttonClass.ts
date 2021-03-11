import classnames from 'classnames';
import { checkClassName } from './className_helper';

export const defaultButtonClass = (
  type?: 'primary' | 'link' | 'default' | 'dashed' | 'danger' | 'success',
  className?: string
) => {
  const classNamesFromTypes = classnames(
    'font-proxiSemiBold transition-all z-10',
    {
      'focus:border-current shadow-none': type === 'link',
    },
    {
      'border-kmcOrange text-kmcOrange hover:bg-kmcOrange hover:text-white':
        type === 'default',
    },
    {
      'border-kmcOrange text-kmcOrange ': type === 'dashed',
    },
    {
      'px-5 border border-red-400 text-red-400 hover:bg-red-400 hover:text-white hover:border-red-400 hover:text-gray-100':
        type === 'danger',
    },
    {
      'text-white border-kmcGreenBase bg-kmcGreenBase hover:bg-green-400 hover:border-green-400 hover:text-white focus:bg-green-400 focus:border-green-400 focus:text-white':
        type === 'success',
    }
  );

  // Generate Default classNames
  const defaultButtonClass = checkClassName(className ? className : '', [
    {
      searchString: 'rounded',
      defaultClassName: 'rounded-sm',
    },
    {
      searchString: 'border',
      defaultClassName: '',
    },
    {
      searchString: 'shadow',
      defaultClassName: type === 'link' ? '' : 'shadow-sm hover:shadow-md',
    },
  ]);

  return [classNamesFromTypes, defaultButtonClass].join(' ');
};
