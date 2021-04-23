import { useField } from "formik";
import uniqueId from "lodash/uniqueId";
import { useMemo } from "react";
import { Field, FieldWrapper } from "./FieldWrapper.types";

export const useFieldWrapper = ({
  name,
  messageId,
  id: userDefinedId,
}: Field): FieldWrapper => {
  const [field, { touched, error }] = useField(name);
  const hasError = useMemo(() => touched && !!error, [touched, error]);
  const msgId = useMemo(
    () => (messageId ? messageId?.toString() : uniqueId(name)),
    [messageId, name]
  );
  const id = useMemo(() => userDefinedId || uniqueId(`id-${name}-`), [
    userDefinedId,
    name,
  ]);

  return {
    id,
    field,
    hasError,
    messageId: msgId.toString(),
    error,
  };
};
