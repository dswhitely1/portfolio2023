import { ChangeEvent, FormEvent, useRef } from 'react';

const createUseFormHook = () =>
  function useForm<T>(initialState: T, cb: () => void) {
    const values = useRef<T>(initialState);

    function handleChange(
      event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) {
      const {
        target: { name, value },
      } = event;
      values.current = { ...values.current, [name]: value };
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();
      cb();
    }

    function handleReset() {
      values.current = initialState;
    }

    return [values.current, handleChange, handleSubmit, handleReset];
  };

export const useForm = /* #__PURE__ */ createUseFormHook();
