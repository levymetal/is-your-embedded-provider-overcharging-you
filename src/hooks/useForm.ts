import {ChangeEvent} from 'react';
import {useReducer} from 'react';

type Field = {
  name?: string;
  maxLength?: number;
  value: any;
  validation?: RegExp;
  isValid: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
};

type State = {
  fields: {
    [key: string]: Field;
  };
};

function reducer(state: State, action) {
  switch (action.type) {
    case 'SET_FIELD_VALUE':
      return {
        ...state,
        fields: {
          ...state.fields,
          [action.key]: {
            ...state.fields[action.key],
            isValid: validateField(state.fields[action.key], action.value),
            value: action.value,
          },
        },
      };
    default:
      return state;
  }
}

function validateField(field, value) {
  if (field.validation == null) return true;
  return value.match(field.validation);
}

type Props = {
  fields: {
    [key: string]: Partial<Field>;
  };
};

export default function useForm(initialState: Props) {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    fields: Object.entries(initialState.fields).reduce((obj, [key, field]) => {
      return {
        ...obj,
        [key]: {
          ...field,
          value: field.value ?? null,
          isValid: true,
          onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            dispatch({type: 'SET_FIELD_VALUE', key, value: event.target.value});
          },
        },
      };
    }, {}),
  });

  return state;
}
