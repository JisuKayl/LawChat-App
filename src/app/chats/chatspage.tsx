/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Image from "next/image";
import Link from "next/link";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HighlightOffTwoToneIcon from "@mui/icons-material/HighlightOffTwoTone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import CircleIcon from "@mui/icons-material/Circle";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ReplyIcon from "@mui/icons-material/Reply";
import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SendIcon from "@mui/icons-material/Send";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import AbcOutlinedIcon from "@mui/icons-material/AbcOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import CancelIcon from "@mui/icons-material/Cancel";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import DeleteIcon from "@mui/icons-material/Delete";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import LogoutIcon from "@mui/icons-material/Logout";
import SaveTwoToneIcon from "@mui/icons-material/SaveTwoTone";
import SupervisedUserCircleTwoToneIcon from "@mui/icons-material/SupervisedUserCircleTwoTone";
import CreateIcon from "@mui/icons-material/Create";

import { useState } from "react";
import { Divider } from "@mui/material";

export default function chats() {
  const [isDropdown1, setIsDropdown1] = useState(false);
  const [isDropdown2, setIsDropdown2] = useState(false);
  const [isDropdown3, setIsDropdown3] = useState(false);
  const [isDropdown4, setIsDropdown4] = useState(false);
  const [isChevronRight1, setIsChevronRight1] = useState(false);
  const [isChevronRight2, setIsChevronRight2] = useState(false);
  const [isChevronRight3, setIsChevronRight3] = useState(false);
  const [isChevronRight4, setIsChevronRight4] = useState(false);
  const [isHorizonClicked, setIsHorizonClicked] = useState(false);
  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [showPopup3, setShowPopup3] = useState(false);
  const [showPopup4, setShowPopup4] = useState(false);
  const [showPopup5, setShowPopup5] = useState(false);
  const [showPopup6, setShowPopup6] = useState(false);
  const [showPopup7, setShowPopup7] = useState(false);
  const [showPopup8, setShowPopup8] = useState(false);
  const [showPopup9, setShowPopup9] = useState(true);
  const [showPopup10, setShowPopup10] = useState(true);
  const [showPopup11, setShowPopup11] = useState(true);

  const toggleChevron = () => {
    setIsHorizonClicked(!isHorizonClicked);
  };
  const toggleDropdown1 = () => {
    setIsDropdown1(!isDropdown1);
    setIsChevronRight1(!isChevronRight1);
  };
  const toggleDropdown2 = () => {
    setIsDropdown2(!isDropdown2);
    setIsChevronRight2(!isChevronRight2);
  };
  const toggleDropdown3 = () => {
    setIsDropdown3(!isDropdown3);
    setIsChevronRight3(!isChevronRight3);
  };
  const toggleDropdown4 = () => {
    setIsDropdown4(!isDropdown4);
    setIsChevronRight4(!isChevronRight4);
  };
  const togglePopup1 = () => {
    setShowPopup1(!showPopup1);
  };
  const togglePopup2 = () => {
    setShowPopup2(!showPopup2);
  };
  const togglePopup3 = () => {
    setShowPopup3(!showPopup3);
  };
  const togglePopup4 = () => {
    setShowPopup4(!showPopup4);
    setShowPopup1(!showPopup1);
    setShowPopup2(!showPopup2);
  };
  const togglePopup5 = () => {
    setShowPopup5((prevState) => !prevState);
  };
  const togglePopup6 = () => {
    setShowPopup6((prevState) => !prevState);
  };
  const togglePopup7 = () => {
    setShowPopup7((prevState) => !prevState);
  };
  const togglePopup8 = () => {
    setShowPopup8((prevState) => !prevState);
  };
  const togglePopup9 = () => {
    setShowPopup9((prevState) => !prevState);
    setShowPopup7(!showPopup7);
    setShowPopup8(!showPopup8);
  };
  const togglePopup10 = () => {
    setShowPopup10((prevState) => !prevState);
    setShowPopup6(!showPopup6);
  };
  const togglePopup11 = () => {
    setShowPopup11((prevState) => !prevState);
    setShowPopup5(!showPopup5);
  };

  return (
    <div className="flex">
      {/*First Portion: Icons*/}
      <div className="w-20 min-h-screen flex flex-col  items-center border-solid border-white border-r-gray-200 p-2">
        <div className="mb-96">
          <Image
            src="/logo.jpg"
            alt="Placeholder Image"
            className="rounded-lg mb-6"
            width={55}
            height={45}
          />
          <ChatBubbleIcon
            className="mb-6 cursor-pointer hover:bg-gray-300 transition-all ease-in-out duration-500 py-1 rounded-md"
            sx={{ color: "gray", width: 50, height: 40 }}
          />
          <PeopleAltIcon
            className="mb-6 cursor-pointer hover:bg-gray-300 transition-all ease-in-out duration-500 py-1 rounded-md"
            sx={{ color: "gray", width: 50, height: 40 }}
          />
          <LocationOnIcon
            className="mb-6 cursor-pointer hover:bg-gray-300 transition-all ease-in-out duration-500 py-1 rounded-md"
            sx={{ color: "gray", width: 50, height: 40 }}
          />
        </div>

        <AccountCircleIcon
          className="mb-6 cursor-pointer hover:bg-gray-300 transition-all ease-in-out duration-500 p-1 rounded-md"
          sx={{ color: "gray", width: 50, height: 50 }}
        />
      </div>
      {/*Second Portion: Chat List*/}
      <div className="w-1/4 min-h-screen mx-4">
        <div className="flex items-center justify-around py-5 ">
          <h2 className="mr-72">Chats</h2>
          <CreateIcon
            className="cursor-pointer"
            sx={{
              color: "gray",
              width: 30,
              height: 30,
              backgroundColor: "#E5E4E2",
              borderRadius: "50%",
              padding: "0.3rem",
            }}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Search message"
            className="pl-14 rounded-full border-gray-200 border-solid px-4 py-3 w-full placeholder-gray-300"
          />
          <SearchIcon
            className="relative bottom-9 left-5"
            sx={{ color: "#E5E4E2", width: 30, height: 30 }}
          />
        </div>
        {showPopup9 && (
          <div className="flex justify-between items-end group px-0.5 py-6 rounded-lg hover:bg-gray-300 transition-all ease-in-out duration-500 cursor-pointer">
            <div className="max-h-10 relative mr-5">
              <AccountCircleIcon
                className="mb-6"
                sx={{ color: "gray", width: 50, height: 50 }}
              />
              <AccountCircleIcon
                className="mb-6 absolute -top-5 left-7 rounded-full bg-white group-hover:bg-gray-300 hover:bg-gray-300 transition-background ease-in-out duration-100"
                sx={{ color: "gray", width: 50, height: 50 }}
              />
            </div>
            <div className="max-w-60 w-full">
              <p className="font-semibold">SMJ Law Film</p>
              <p className="max-w-fit max-h-10 whitespace-nowrap overflow-hidden text-ellipsis text-sm font-semibold group-hover:text-gray-400 group-hover:font-normal">
                Madel: Already change your schedule about the meeting
              </p>
            </div>
            <div className="flex relative">
              <p className="mr-2 opacity-100 group-hover:opacity-0 ">1m</p>
              <CircleIcon
                className="rounded-full opacity-100 group-hover:opacity-0 "
                sx={{ color: "blue", width: 10, height: 10 }}
              />
              <MoreHorizIcon
                className="absolute top-0 bg-white rounded-full opacity-0 group-hover:opacity-100 cursor-pointer"
                sx={{ width: 20, height: 20 }}
                onClick={togglePopup7}
              />
            </div>
          </div>
        )}
        <div className="flex justify-between items-end mt-10 pb-6">
          <div className="max-h-10 relative mr-5">
            <AccountCircleIcon
              className="mb-6"
              sx={{ color: "gray", width: 50, height: 50 }}
            />
            <AccountCircleIcon
              className="mb-6 absolute -top-5 left-7 rounded-full bg-white"
              sx={{ color: "gray", width: 50, height: 50 }}
            />
          </div>
          <div className="max-w-60 w-full">
            <p>Mansala Law Firm</p>
            <p className="max-w-fit max-h-10 whitespace-nowrap overflow-hidden text-ellipsis text-gray-400 text-sm">
              Atty.Robert I can&apos;t edit the description in the announcement
              tab
            </p>
          </div>
          <div className="flex">
            <p className="mr-2">15m</p>
          </div>
        </div>
        <div className="flex justify-between items-end mt-10">
          <div className="max-h-10 relative mr-5">
            <AccountCircleIcon
              className="mb-6"
              sx={{ color: "gray", width: 50, height: 50 }}
            />
            <AccountCircleIcon
              className="mb-6 absolute -top-5 left-7 rounded-full bg-white"
              sx={{ color: "gray", width: 50, height: 50 }}
            />
          </div>
          <div className="max-w-60 w-full">
            <p>GPA Law Firm</p>
            <p className="max-w-fit max-h-10 whitespace-nowrap overflow-hidden text-ellipsis text-gray-400 text-sm">
              Atty.Czarina: I tried to upload a bulk of medias in my account
            </p>
          </div>
          <div className="flex">
            <p className="mr-2">3d</p>
          </div>
        </div>
      </div>
      {/*Third Portion: Chat Message*/}
      <div className="w-full min-h-screen border-solid border-white border-x-gray-200">
        <div>
          <div className="flex justify-between px-6 py-8">
            <div className="flex items-center">
              {showPopup11 ? (
                <div className="max-h-10 relative mr-10">
                  <AccountCircleIcon
                    className="mb-6"
                    sx={{ color: "gray", width: 50, height: 50 }}
                  />
                  <AccountCircleIcon
                    className="mb-6 absolute -top-5 left-7 rounded-full bg-white"
                    sx={{ color: "gray", width: 50, height: 50 }}
                  />
                </div>
              ) : (
                <div className="max-h-10 relative mr-10">
                  <SupervisedUserCircleTwoToneIcon
                    className="mb-6"
                    sx={{ color: "gray", width: 50, height: 50 }}
                  />
                  <SupervisedUserCircleTwoToneIcon
                    className="mb-6 absolute -top-5 left-7 rounded-full bg-white"
                    sx={{ color: "gray", width: 50, height: 50 }}
                  />
                </div>
              )}
              {showPopup10 ? (
                <p className="font-semibold">Mansala Law Firm</p>
              ) : (
                <p className="font-semibold">Changed chat name</p>
              )}
            </div>
            <div>
              <AddCircleOutlineIcon
                className="mr-4 cursor-pointer hover:bg-gray-300 transition-all ease-in-out duration-500  rounded-full"
                sx={{ width: 30, height: 30 }}
                onClick={togglePopup1}
              />
              <MoreHorizIcon
                className="cursor-pointer hover:bg-gray-300 transition-all ease-in-out duration-500  rounded-full"
                sx={{ width: 30, height: 30 }}
                onClick={toggleChevron}
              />
            </div>
          </div>
        </div>
        <div className="px-5 flex flex-col justify-between min-h-screen">
          <div>
            <p className="flex justify-center text-gray-600  text-sm">
              Sun, Aug 20 at 5:45 PM
            </p>
            <div className="flex items-center">
              <AccountCircleIcon
                className="mr-2"
                sx={{ color: "gray", width: 50, height: 50 }}
              />
              <div>
                <p className="ml-5 mb-1 text-xs text-gray-500">Madel</p>
                <p className="bg-gray-300 text-sm flex items-center p-4 rounded-3xl max-w-96 max-h-full">
                  I updated the calendar and re-reschedule your new hearing
                  Atty. Mansalas.
                </p>
              </div>
            </div>

            <p className="flex justify-center text-gray-600 py-5 text-sm">
              Wed, Dec 20 at 11:31 PM
            </p>
            <div className="flex items-center">
              <AccountCircleIcon
                className="mr-2"
                sx={{ color: "gray", width: 50, height: 50 }}
              />
              <div>
                <p className="ml-5 mb-1 text-xs text-gray-500">Atty.Marvin</p>
                <p className="bg-gray-300 flex items-center p-4 rounded-3xl max-w-96 max-h-full text-sm">
                  I can&apos;t attach any files on my schedule calendar. Anyone
                  in the support can help me for this?
                </p>
              </div>
            </div>
            <div className="flex items-end py-3 flex-col">
              <div className="flex justify-center items-start max-w-full text-xs mr-16 mb-2">
                <ReplyIcon
                  className="mr-1"
                  sx={{ color: "gray", width: 15, height: 15 }}
                />
                <p className="text-gray-400">You replied to Atty. Marvin</p>
              </div>
              {/* <p className="bg-gray-300 p-4 rounded-tl-3xl rounded-tr-3xl mr-5 justify-center items-center max-w-56  whitespace-nowrap overflow-hidden text-ellipsis text-gray-400 text-sm">
                I can&apos;t attach any files on my schedule calendar. Anyone
                  in the support can help me for this?
              </p> */}
              <p className="bg-gray-300 p-4 rounded-tl-3xl rounded-tr-3xl mr-5 justify-center items-center max-w-56 overflow-hidden text-ellipsis text-gray-400 text-sm">
                I can&apos;t attach any files on my schedule calendar. Anyone...
              </p>
              <p className="bg-green-500 text-white text-sm flex items-center p-4 rounded-3xl max-w-96 max-h-full">
                Noted Atty. We will fix it as soon as possible.
              </p>
            </div>
            <div className="flex items-center">
              <AccountCircleIcon
                className="mr-2"
                sx={{ color: "gray", width: 50, height: 50 }}
              />
              <div>
                <p className="ml-5 mb-1 text-xs text-gray-500">Atty.Marvin</p>
                <p className="bg-gray-300 flex items-center p-4 rounded-3xl max-w-96 max-h-full text-sm">
                  Thank you.
                </p>
              </div>
            </div>
            {showPopup4 && (
              <p className="flex justify-center text-gray-400 py-5 text-sm">
                Admin added Jerson Kyle Bonifacio to the group.
              </p>
            )}

            {/* <div className="flex items-end py-3 flex-col">
              <p className="bg-green-500 text-white text-sm flex items-center p-4 rounded-3xl max-w-96 max-h-full">
                We understand the inconvenience caused and ensure you that our
                team is actively working.
              </p>
            </div> */}
          </div>

          {isHorizonClicked ? (
            <div className="fixed max-w-2xl bottom-1 w-full bg-white ml-4">
              <div className="flex justify-center w-full h-full mt-5">
                <AddCircleIcon
                  className="mb-6 mr-3"
                  sx={{ color: "#E5E4E2", width: 30, height: 30 }}
                />
                <div className="w-full relative">
                  <input
                    type="text"
                    className="rounded-full p-2 border-gray-300 border-solid w-full px-2 pl-5 pr-8"
                  />
                  <SendIcon
                    className="absolute top-1.5 right-2"
                    sx={{
                      color: "#E5E4E2",
                      width: 20,
                      height: 20,
                      transform: "rotate(-45deg)",
                    }}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="fixed max-w-4xl bottom-1 w-full bg-white ml-8">
              <div className="flex justify-center w-full h-full mt-5">
                <AddCircleIcon
                  className="mb-6 mr-3"
                  sx={{ color: "#E5E4E2", width: 30, height: 30 }}
                />
                <div className="w-full relative">
                  <input
                    type="text"
                    className="rounded-full p-2 border-gray-300 border-solid w-full px-2 pl-5 pr-8"
                  />
                  <SendIcon
                    className="absolute top-1.5 right-2"
                    sx={{
                      color: "#E5E4E2",
                      width: 20,
                      height: 20,
                      transform: "rotate(-45deg)",
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/*Add button pop-up */}
      {showPopup1 && (
        <div className="fixed inset-0 flex items-center justify-center ">
          <div className="bg-white rounded-lg p-6 w-80 h-96 border shadow-2xl overflow-y-scroll">
            {showPopup2 || showPopup3 ? (
              <div className="flex justify-between">
                <Link className="" href="" onClick={togglePopup1}>
                  Cancel
                </Link>
                <p className="font-semibold flex">Choose People</p>
                <Link className="" href="" onClick={togglePopup4}>
                  Add
                </Link>
              </div>
            ) : (
              <div className="flex">
                <Link className="" href="" onClick={togglePopup1}>
                  Cancel
                </Link>
                <p className="font-semibold flex ml-7">Choose People</p>
                {}
              </div>
            )}
            <div className="mt-3 relative">
              <input
                type="text"
                placeholder="Search message"
                className="pl-14 rounded-full border-gray-200 border-solid px-4 py-2 w-full placeholder-gray-300"
              />
              <SearchIcon
                className="absolute bottom-2 left-5"
                sx={{ color: "#E5E4E2", width: 20, height: 20 }}
              />
            </div>
            <div className="flex items-start">
              {showPopup2 && (
                <div className="flex flex-col justify-center items-center my-2">
                  <div className="max-h-10 relative">
                    <AccountCircleIcon
                      className="mb-6 rounded-full"
                      sx={{
                        color: "gray",
                        width: 40,
                        height: 40,
                      }}
                    />
                  </div>
                  <div className="max-w-20 w-full relative">
                    <CancelIcon
                      className="absolute -top-10 left-11 rounded-full cursor-pointer"
                      sx={{
                        color: "white",
                        backgroundColor: "black",
                        width: 20,
                        height: 20,
                      }}
                      onClick={togglePopup2}
                    />
                    <p className="font-semibold text-sm text-center">
                      Jerson Kyle Bonifacio
                    </p>
                  </div>
                </div>
              )}
              {showPopup3 && (
                <div className="flex flex-col justify-center items-center my-2 ml-3">
                  <div className="max-h-10 relative">
                    <AccountCircleIcon
                      className="mb-6 rounded-full"
                      sx={{
                        color: "gray",
                        width: 40,
                        height: 40,
                      }}
                    />
                  </div>
                  <div className="max-w-20 w-full relative">
                    <CancelIcon
                      className="absolute -top-10 left-11 rounded-full cursor-pointer"
                      sx={{
                        color: "white",
                        backgroundColor: "black",
                        width: 20,
                        height: 20,
                      }}
                      onClick={togglePopup3}
                    />
                    <p className="font-semibold text-sm text-center">
                      Raphael Sy
                    </p>
                  </div>
                </div>
              )}
            </div>
            <p className="text-gray-400 text-sm mt-2">Suggested</p>
            <div className="">
              <div className="flex justify-between items-center my-2">
                <div className="max-h-10 relative mr-5">
                  <AccountCircleIcon
                    className="mb-6"
                    sx={{ color: "gray", width: 40, height: 40 }}
                  />
                </div>
                <div className="max-w-60 w-full">
                  <p className="font-semibold text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                    Jerson Kyle Bonifacio
                  </p>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    className="w-4 h-4 cursor-pointer "
                    onClick={togglePopup2}
                  />
                </div>
              </div>
              <div className="flex justify-between items-center my-2">
                <div className="max-h-10 relative mr-5">
                  <AccountCircleIcon
                    className="mb-6"
                    sx={{ color: "gray", width: 40, height: 40 }}
                  />
                </div>
                <div className="max-w-60 w-full">
                  <p
                    className="font-semibold text-sm whitespace-nowrap overflow-hidden text-ellipsis"
                    onClick={togglePopup3}
                  >
                    Raphael Sy
                  </p>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    className="w-4 h-4 cursor-pointer "
                    onClick={togglePopup3}
                  />
                </div>
              </div>
              <div className="flex justify-between items-center my-2">
                <div className="max-h-10 relative mr-5">
                  <AccountCircleIcon
                    className="mb-6"
                    sx={{ color: "gray", width: 40, height: 40 }}
                  />
                </div>
                <div className="max-w-60 w-full">
                  <p className="font-semibold text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                    Marvin Malsada
                  </p>
                </div>
                <div className="flex">
                  <input type="checkbox" className="w-4 h-4" />
                </div>
              </div>
              <div className="flex justify-between items-center my-2">
                <div className="max-h-10 relative mr-5">
                  <AccountCircleIcon
                    className="mb-6"
                    sx={{ color: "gray", width: 40, height: 40 }}
                  />
                </div>
                <div className="max-w-60 w-full">
                  <p className="font-semibold text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                    Joshua Martins
                  </p>
                </div>
                <div className="flex">
                  <input type="checkbox" className="w-4 h-4" />
                </div>
              </div>
              <div className="flex justify-between items-center my-2">
                <div className="max-h-10 relative mr-5">
                  <AccountCircleIcon
                    className="mb-6"
                    sx={{ color: "gray", width: 40, height: 40 }}
                  />
                </div>
                <div className="max-w-60 w-full">
                  <p className="font-semibold text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                    Christine Joy Beda
                  </p>
                </div>
                <div className="flex">
                  <input type="checkbox" className="w-4 h-4" />
                </div>
              </div>
              <div className="flex justify-between items-center my-2">
                <div className="max-h-10 relative mr-5">
                  <AccountCircleIcon
                    className="mb-6"
                    sx={{ color: "gray", width: 40, height: 40 }}
                  />
                </div>
                <div className="max-w-60 w-full">
                  <p className="font-semibold text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                    Madel Siemsi
                  </p>
                </div>
                <div className="flex">
                  <input type="checkbox" className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showPopup5 && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div>
            <Image
              src="/fileexplorer.jpg"
              alt="Placeholder Image"
              className="rounded-lg mb-6"
              width={1000}
              height={600}
            />
            <CancelIcon
              className="absolute top-16 right-72 rounded-full cursor-pointer"
              sx={{
                color: "white",
                backgroundColor: "black",
                width: 40,
                height: 40,
                zIndex: 999,
              }}
              onClick={togglePopup5}
            />
            <SaveTwoToneIcon
              className="absolute bottom-24 right-72 rounded-full cursor-pointer"
              sx={{
                backgroundColor: "white",
                padding: "0.2rem",
                width: 55,
                height: 55,
                zIndex: 999,
                border: "5px solid black",
              }}
              onClick={togglePopup11}
            />
            <CancelIcon
              className="absolute top-16 right-72 rounded-full cursor-pointer"
              sx={{
                color: "white",
                backgroundColor: "black",
                width: 40,
                height: 40,
                zIndex: 999,
              }}
              onClick={togglePopup5}
            />
          </div>
        </div>
      )}
      {showPopup6 && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="">
            <div className="bg-white rounded-lg p-6 w-fit h-48 border shadow-2xl relative">
              <p className="font-semibold text-center">Change chat name</p>
              <CancelIcon
                className="absolute top-2 right-2 rounded-full cursor-pointer"
                sx={{
                  color: "#E5E4E2",
                  backgroundColor: "black",
                  width: 25,
                  height: 25,
                  zIndex: 999,
                }}
                onClick={togglePopup6}
              />
              <div>
                <p className="text-gray-400 text-xs mt-3">
                  Changing the name of a group chat changes it for everyone
                </p>
                <input
                  type="textfield"
                  placeholder="Chat name"
                  max={500}
                  className="w-full h-12 mt-2 rounded-md p-3 border-solid border-gray-300"
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={togglePopup6}
                  className="w-64 bg-gray-400 rounded-lg mt-2 p-3 border-none cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={togglePopup10}
                  className="w-64 bg-red-600 text-white rounded-lg mt-2 p-3 border-none cursor-pointer"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showPopup7 && (
        <div className="fixed top-60 left-96 flex items-center justify-center ">
          <div className="bg-white rounded-lg p-6 w-fit h-72 border shadow-2xl relative ">
            <div>
              <div className="flex justify-start items-center my-2 cursor-pointer hover:bg-gray-300 transition-all ease-in-out duration-500 px-2 py-1 rounded-md">
                <DoneAllIcon
                  className="bg-gray-200 rounded-full p-1 mr-3"
                  sx={{ width: 30, height: 30 }}
                />
                <p className="text-sm">Mark as read</p>
              </div>
              <div className="flex justify-start items-center my-2 py-1 cursor-pointer hover:bg-gray-300 transition-all ease-in-out duration-500 px-2  rounded-md">
                <NotificationsOffIcon
                  className="bg-gray-200 rounded-full p-1 mr-3 "
                  sx={{ width: 30, height: 30 }}
                />
                <p className="text-sm">Mute Notifications</p>
              </div>
              <div className="border-solid  border-white border-b-gray-300" />
              <div
                className="flex justify-start items-center  my-2 cursor-pointer hover:bg-gray-300 transition-all ease-in-out duration-500 px-2 py-1 rounded-md"
                onClick={togglePopup8}
              >
                <DeleteIcon
                  className="bg-gray-200 rounded-full p-1 mr-3"
                  sx={{ width: 30, height: 30 }}
                />
                <p className="text-sm">Delete chat</p>
              </div>
              <div className="flex justify-start items-center  my-2 cursor-pointer hover:bg-gray-300 transition-all ease-in-out duration-500 px-2 py-1 rounded-md">
                <ReportGmailerrorredIcon
                  className="bg-gray-200 rounded-full p-1 mr-3"
                  sx={{ width: 30, height: 30 }}
                />
                <p className="text-sm">Report</p>
              </div>
              <div className="flex justify-start items-center  my-2 cursor-pointer hover:bg-gray-300 transition-all ease-in-out duration-500 px-2 py-1 rounded-md">
                <LogoutIcon
                  className="bg-gray-200 rounded-full p-1 mr-3"
                  sx={{ width: 30, height: 30 }}
                />
                <p className="text-sm">Leave group</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {showPopup8 && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="">
            <div className="bg-white rounded-lg p-6 w-fit h-40 border shadow-2xl relative">
              <p className="font-semibold text-center">Delete chat</p>
              <CancelIcon
                className="absolute top-2 right-2 rounded-full cursor-pointer"
                sx={{
                  color: "#E5E4E2",
                  backgroundColor: "black",
                  width: 25,
                  height: 25,
                  zIndex: 999,
                }}
                onClick={togglePopup8}
              />
              <div>
                <p className="text-gray-400 text-xs mt-3 py-2 text-center">
                  Once you delete your copy of your conversation, it cannot be
                  undone.
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={togglePopup8}
                  className="w-64 bg-gray-400 rounded-lg mt-2 p-3 border-none cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={togglePopup9}
                  className="w-64 bg-red-600 text-white rounded-lg mt-2 p-3 border-none cursor-pointer"
                >
                  Delete chat
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Fourth Portion: Chat Settings */}
      {isHorizonClicked && (
        <div className="w-1/3 min-h-screen py-16 px-7">
          <div className="flex flex-col items-center">
            <div className="max-h-10 relative mr-10">
              <AccountCircleIcon
                className="mb-6"
                sx={{ color: "gray", width: 60, height: 60 }}
              />
              <AccountCircleIcon
                className="mb-6 absolute -top-5 left-7 rounded-full bg-white"
                sx={{ color: "gray", width: 60, height: 60 }}
              />
            </div>
            <p className="mt-6 font-semibold">Mansala Law Firm</p>
          </div>
          <div className=" flex justify-center mt-3">
            <NotificationsOffIcon
              className="bg-gray-300 rounded-full p-1 mr-2 cursor-pointer"
              sx={{ color: "gray", width: 30, height: 30 }}
            />
            <SearchIcon
              className="bg-gray-300 rounded-full p-1 ml-2 cursor-pointer"
              sx={{ color: "gray", width: 30, height: 30 }}
            />
          </div>
          <div className="mt-10 ">
            <div
              className="flex justify-between items-center font-semibold mt-4 cursor-pointer hover:bg-gray-300 transition-all ease-in-out duration-500 p-1 pl-3 rounded-md"
              onClick={toggleDropdown1}
            >
              <p>Customize Chat</p>
              {isChevronRight1 ? (
                <KeyboardArrowDownIcon
                  className=""
                  sx={{ width: 30, height: 30 }}
                />
              ) : (
                <ChevronRightIcon className="" sx={{ width: 30, height: 30 }} />
              )}
            </div>
            {isDropdown1 && (
              <div>
                <div
                  className="flex justify-start items-center my-2 cursor-pointer  hover:bg-gray-300 transition-all ease-in-out duration-500 p-1 pl-3 rounded-md"
                  onClick={togglePopup6}
                >
                  <EditOutlinedIcon
                    className="bg-gray-200 rounded-full p-1 mr-3 cursor-pointer"
                    sx={{ width: 30, height: 30 }}
                  />
                  <p className="text-sm">Change chat name</p>
                </div>
                <div
                  className="flex justify-start items-center  my-2 cursor-pointer  hover:bg-gray-300 transition-all ease-in-out duration-500 p-1 pl-3 rounded-md"
                  onClick={togglePopup5}
                >
                  <PhotoOutlinedIcon
                    className="bg-gray-200 rounded-full p-1 mr-3 cursor-pointer"
                    sx={{ width: 30, height: 30 }}
                  />
                  <p className="text-sm">Change photo</p>
                </div>
                <div className="flex justify-start items-center  my-2 cursor-pointer  hover:bg-gray-300 transition-all ease-in-out duration-500 p-1 pl-3 rounded-md">
                  <AbcOutlinedIcon
                    className="bg-gray-200 rounded-full p-1 mr-3 cursor-pointer"
                    sx={{ width: 30, height: 30 }}
                  />
                  <p className="text-sm">Edit nicknames</p>
                </div>
                <div className="flex justify-start items-center  my-2 cursor-pointer  hover:bg-gray-300 transition-all ease-in-out duration-500 p-1 pl-3 rounded-md">
                  <SearchIcon
                    className="bg-gray-200 rounded-full p-1 mr-3 cursor-pointer"
                    sx={{ width: 30, height: 30 }}
                  />
                  <p className="text-sm">Search in conversations</p>
                </div>
              </div>
            )}
            <div
              className="flex justify-between items-center font-semibold mt-4 cursor-pointer  hover:bg-gray-300 transition-all ease-in-out duration-500 p-1 pl-3 rounded-md"
              onClick={toggleDropdown2}
            >
              <p>Chat Members</p>
              {isChevronRight2 ? (
                <KeyboardArrowDownIcon
                  className="cursor-pointer"
                  sx={{ width: 30, height: 30 }}
                />
              ) : (
                <ChevronRightIcon
                  className="cursor-pointer"
                  sx={{ width: 30, height: 30 }}
                />
              )}
            </div>
            {isDropdown2 && (
              <div className="flex flex-col">
                <div className="flex justify-between items-center my-2 cursor-pointer hover:bg-gray-300 transition-all ease-in-out duration-500 p-0.5 rounded-md">
                  <div className="max-h-10 relative mr-5">
                    <AccountCircleIcon
                      className="mb-6"
                      sx={{ color: "gray", width: 40, height: 40 }}
                    />
                  </div>
                  <div className="max-w-60 w-full">
                    <p className="font-semibold text-sm">Joshua Martins</p>
                    <p className="max-w-fit max-h-10 whitespace-nowrap overflow-hidden text-ellipsis text-xs text-gray-400">
                      Associate Atty. Martins
                    </p>
                  </div>
                  <div className="flex">
                    <MoreHorizIcon
                      className="rounded-full"
                      sx={{ width: 20, height: 20 }}
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center my-2 cursor-pointer hover:bg-gray-300 transition-all ease-in-out duration-500 p-0.5 rounded-md">
                  <div className="max-h-10 relative mr-5">
                    <AccountCircleIcon
                      className="mb-6"
                      sx={{ color: "gray", width: 40, height: 40 }}
                    />
                  </div>
                  <div className="max-w-60 w-full">
                    <p className="font-semibold text-sm">Marvin Malsada</p>
                    <p className="max-w-fit max-h-10 whitespace-nowrap overflow-hidden text-ellipsis text-xs text-gray-400">
                      Associate Atty. Marvin
                    </p>
                  </div>
                  <div className="flex">
                    <MoreHorizIcon
                      className="rounded-full"
                      sx={{ width: 20, height: 20 }}
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center my-2 cursor-pointer hover:bg-gray-300 transition-all ease-in-out duration-500 p-0.5 rounded-md">
                  <div className="max-h-10 relative mr-5">
                    <AccountCircleIcon
                      className="mb-6"
                      sx={{ color: "gray", width: 40, height: 40 }}
                    />
                  </div>
                  <div className="max-w-60 w-full">
                    <p className="font-semibold text-sm">Raphael Sy</p>
                    <p className="max-w-fit max-h-10 whitespace-nowrap overflow-hidden text-ellipsis text-xs text-gray-400">
                      Legal Atty. Raphael
                    </p>
                  </div>
                  <div className="flex">
                    <MoreHorizIcon
                      className="rounded-full"
                      sx={{ width: 20, height: 20 }}
                    />
                  </div>
                </div>
              </div>
            )}
            <div
              className="flex justify-between items-center font-semibold mt-4 cursor-pointer  hover:bg-gray-300 transition-all ease-in-out duration-500 p-1 pl-3 rounded-md"
              onClick={toggleDropdown3}
            >
              <p className="flex justify-start">Media and Files</p>
              {isChevronRight3 ? (
                <KeyboardArrowDownIcon
                  className=""
                  sx={{ width: 30, height: 30 }}
                />
              ) : (
                <ChevronRightIcon className="" sx={{ width: 30, height: 30 }} />
              )}
            </div>
            {isDropdown3 && (
              <div>
                <div className="flex justify-start items-center my-2 cursor-pointer hover:bg-gray-300 transition-all ease-in-out duration-500 p-1 pl-3 rounded-md">
                  <AttachFileOutlinedIcon
                    className="bg-gray-200 rounded-full p-1 mr-3"
                    sx={{ width: 30, height: 30, transform: "rotate(45deg)" }}
                  />
                  <p className="text-sm">Attachment</p>
                </div>
                <div className="flex justify-start items-center  my-2 cursor-pointer hover:bg-gray-300 transition-all ease-in-out duration-500 p-1 pl-3 rounded-md">
                  <PhotoOutlinedIcon
                    className="bg-gray-200 rounded-full p-1 mr-3"
                    sx={{ width: 30, height: 30 }}
                  />
                  <p className="text-sm">Media</p>
                </div>
              </div>
            )}
            <div
              className="flex justify-between items-center font-semibold mt-4 cursor-pointer  hover:bg-gray-300 transition-all ease-in-out duration-500 p-1 pl-3 rounded-md"
              onClick={toggleDropdown4}
            >
              <p>Privacy & Support</p>
              {isChevronRight4 ? (
                <KeyboardArrowDownIcon
                  className=""
                  sx={{ width: 30, height: 30 }}
                />
              ) : (
                <ChevronRightIcon className="" sx={{ width: 30, height: 30 }} />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
