"use client";
import React from "react";

function error({ error }) {
  console.log(error, "error");
  return <div> oh ohhh....{error.message}</div>;
}

export default error;
