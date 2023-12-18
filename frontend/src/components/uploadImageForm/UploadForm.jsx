import React from "react";
import { useForm, Controller } from "react-hook-form";
import styled from "styled-components";

const FormContainer = styled.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background: ${(props) => props.theme.component};
  color: ${(props) => props.theme.text};
  font-family: ${(props) => props.theme.font};
`;

const TitleInput = styled.input`
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  border: 1px solid ${(props) => props.theme.border};
  outline: none;
`;

const ImageInput = styled.input`
  margin-bottom: 10px;
`;

const SubmitButton = styled.button`
  background: ${(props) => props.theme.hover};
  color: ${(props) => props.theme.text};
  padding: 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    background: ${(props) => props.theme.active};
  }
`;

const ErrorMessage = styled.div`
  color: ${(props) => props.theme.accent};
  margin-top: 5px;
`;

const ImageForm = () => {
  const { handleSubmit, control, setValue, formState } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <label>Title:</label>
      <TitleInput
        type='text'
        {...{
          ...control.register("title", {
            required: "Title is required",
          }),
        }}
      />
      {formState.errors.title && (
        <ErrorMessage>{formState.errors.title.message}</ErrorMessage>
      )}
      <label>Select Images:</label>
      <Controller
        name='images'
        control={control}
        defaultValue={[]}
        rules={{
          required: "Please select at least one image.",
        }}
        render={({ field }) => (
          <>
            <ImageInput
              type='file'
              multiple
              onChange={(e) => {
                setValue("images", Array.from(e.target.files));
                field.onChange(Array.from(e.target.files));
              }}
            />
            {formState.errors.images && (
              <ErrorMessage>{formState.errors.images.message}</ErrorMessage>
            )}
          </>
        )}
      />

      <SubmitButton type='submit'>Submit</SubmitButton>
    </FormContainer>
  );
};

export default ImageForm;
