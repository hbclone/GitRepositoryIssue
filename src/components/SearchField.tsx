import styled from "@emotion/styled";
import QueryString from "qs";
import React, { useCallback, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  createSearchParams,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Colors, rowCenter } from "../style/theme";

import { MuiTextField } from "./Mui/MuiTextField";

const SearchField = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();

  const { control, getValues, setValue, handleSubmit } = useForm({
    defaultValues: {
      name: "",
    },
  });

  useEffect(() => {
    searchParamCheck();
  }, []);

  const searchParamCheck = () => {
    if (getValues("name") !== searchParams.get("q")) {
      if (searchParams.get("q"))
        setValue("name", String(searchParams.get("q")));
      else {
        setValue("name", "");
      }
    }
  };

  const formSubmit = useCallback(
    (v: { name: string }) => {
      searchParams.set("q", v.name);
      setSearchParams(searchParams);
      navigate({
        pathname: location.pathname,
        search: `${createSearchParams(searchParams)}`,
      });
    },
    [location]
  );

  return (
    <Wrapper>
      <ForwWrapper onSubmit={handleSubmit(formSubmit)}>
        <Controller
          control={control}
          name="name"
          render={({ field: { value, onChange } }) => (
            <MuiTextField
              value={value}
              onChange={onChange}
              placeholder="repository name"
              wrapperProps={{
                width: "80%",
              }}
              inputProps={{
                style: {
                  color: Colors.gray[300],
                  height: "1.5rem",
                  width: "100%",
                },
              }}
              iconClick={handleSubmit(formSubmit)}
            />
          )}
        />
      </ForwWrapper>
    </Wrapper>
  );
};

export default SearchField;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 5rem;
  /* padding: 0 1rem; */
  ${rowCenter}
`;

const ForwWrapper = styled.form`
  width: 100%;
  padding: 0 1rem;
`;
