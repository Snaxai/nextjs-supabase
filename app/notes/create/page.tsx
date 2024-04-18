"use client";

import { createClient } from "@/utils/supabase/server";
import React, { useState } from "react";

const Create = () => {
  const supabase = createClient();

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const addNote = async (title: string, subtitle: string) => {
    const awd = await supabase.from("notes").insert({ title, subtitle });
  };
  return (
    <div>
      <input
        type='text'
        placeholder='title'
        onChange={({ target }) => setTitle(target.value)}
      />
      <input
        type='text'
        placeholder='subtitle'
        onChange={({ target }) => setSubtitle(target.value)}
      />
      <button onClick={() => addNote(title, subtitle)}>Add</button>
    </div>
  );
};

export default Create;
