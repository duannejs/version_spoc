import { FormatterCpfCnjpTypes } from "./types";

export const FormatterCpfCnjp = ({ num }: FormatterCpfCnjpTypes) => {
    if (num) {
      if (num.length === 11) {
        return num.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
      }
      if (num.length === 14) {
        return num.replace(
          /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
          '$1.$2.$3/$4-$5'
        );
      }
      return num;
    }
    return '-';
  };