import {Text as RNText, TextStyle} from 'react-native';
export type TextProps = {
    text: string;
    type: 'regular' | 'semibold' | 'extrabold' | 'black';
    className?: string;
    style?: TextStyle | TextStyle[];
    numberOfLines?: number;
  };
export const Text = ({text, type='regular', ...props}: TextProps) => {
  return (
    <RNText 
    {...props}
      className={`font-p-${type} ${props.className}`}
      style={[props.style]}
      numberOfLines={props.numberOfLines}>
      {text}
    </RNText>
  );
};
