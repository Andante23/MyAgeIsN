import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { postData } from "../api/post";
import { useNavigate } from "react-router-dom";
import Header from "../components/common/Header";

const HomePage: React.FC = () => {
  // 닉네임 , 남/여 , 나이 , 내용 1 , 내용 2  state
  const navigate = useNavigate();
  const [nickname, setNickName] = useState<string>("");
  const [gender, setGender] = useState<string>("남");
  const [age, setAge] = useState<number>(0);
  const [contentWon, setContentWon] = useState<string>("");
  const [contentTwo, setContentTwo] = useState<string>("");
  const [count, setCount] = useState<number>(0);

  const onChangeNickName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickName(event.target.value);
  };

  const onChangeContentWon = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setContentWon(event.target.value);
  };

  const onChangeContentTwo = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setContentTwo(event.target.value);
  };

  const onChangeAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.valueAsNumber);
  };

  const onChangeGender = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: postData,
    onError: () => {
      alert("there was an error");
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["post"],
      });
    },
  });

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    mutation.mutate({
      id: crypto.randomUUID(),
      nickname,
      gender,
      age,
      contentWon,
      contentTwo,
      count,
    });

    navigate(`/list`);
  };

  return (
    <>
      <Header />
      {/* 닉네임 , 성별 , 나이 , 글1 ,글2 을 입력 받는 폼 */}
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="닉네임"
          value={nickname}
          onChange={onChangeNickName}
          required
        />
        <br />
        <div>
          <input
            type="radio"
            name=""
            value={gender}
            checked={gender === "남"}
            onChange={onChangeGender}
            required
          />{" "}
          남
          <br />
          <input
            type="radio"
            name=""
            id=""
            value={gender}
            checked={gender === "여"}
            onChange={onChangeGender}
            required
          />{" "}
          여
        </div>

        <br />
        <input
          type="number"
          placeholder="나이"
          onChange={onChangeAge}
          value={0}
          defaultValue={0}
          min={0}
          required
        />
        <p>
          당신이 만약 {age}라면
          <br />
          <textarea
            placeholder="내용을 입력해주세요"
            value={contentWon}
            onChange={onChangeContentWon}
            required
          />
        </p>
        <p>
          당신에게 1억이 있다면
          <br />
          <textarea
            placeholder="내용을 입력해주세요"
            onChange={onChangeContentTwo}
            required
          />
        </p>
        <button type="submit">제출</button>
      </form>
    </>
  );
};

export default HomePage;
