import React from "react";
import Image from "next/image";
import styled, { keyframes } from "styled-components";

type Images = {
  images: ImageOne[];
};

type ImageOne = {
  imgPath: string;
  alt: string;
  text?: string;
  imageLink?: string;
  width: number;
  height: number;
};
