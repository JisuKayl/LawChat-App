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

export default function chats() {
  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";
  return (
    <div className="flex">
      {/*First Portion: Icons*/}
      <div className="w-20 min-h-screen flex flex-col justify-between items-center border-solid border-white border-r-gray-200 p-2">
        <div>
          <Image
            src="/logo.jpg"
            alt="Placeholder Image"
            className="rounded-lg mb-6"
            width={55}
            height={45}
          />
          <ChatBubbleIcon
            className="mb-6"
            sx={{ color: "gray", width: 50, height: 40 }}
          />
          <PeopleAltIcon
            className="mb-6"
            sx={{ color: "gray", width: 50, height: 40 }}
          />
          <LocationOnIcon
            className="mb-6"
            sx={{ color: "gray", width: 50, height: 40 }}
          />
        </div>

        <AccountCircleIcon
          className="mb-6 "
          sx={{ color: "gray", width: 50, height: 50 }}
        />
      </div>
      {/*Second Portion: Chat List*/}
      <div className="w-1/4 min-h-screen mx-4">
        <div className="flex items-center justify-around py-5">
          <h2 className="mr-72">Chats</h2>
          <HighlightOffTwoToneIcon
            sx={{ color: "gray", width: 30, height: 30 }}
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
        <div className="flex justify-between items-end">
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
            <p className="font-semibold">SMJ Law Film</p>
            <p className="max-w-fit max-h-10 whitespace-nowrap overflow-hidden text-ellipsis text-sm font-semibold">
              Madel: Already change your schedule about the meeting
            </p>
          </div>
          <div className="flex">
            <p className="mr-2">1m</p>
            <CircleIcon
              className="rounded-full"
              sx={{ color: "blue", width: 10, height: 10 }}
            />
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
      <div className="w-1/2 min-h-screen border-solid border-white border-x-gray-200">
        <div>
          <div className="flex justify-between px-6 py-8">
            <div className="flex items-center">
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
              <p>Mansala Law Firm</p>
            </div>
            <div>
              <AddCircleOutlineIcon
                className="mr-4"
                sx={{ width: 30, height: 30 }}
              />
              <MoreHorizIcon className="" sx={{ width: 30, height: 30 }} />
            </div>
          </div>
        </div>
        <div className="px-5">
          <div>
            <p className="flex justify-center text-gray-600 py-3 text-sm">
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
            {/* <div className="flex items-end py-3 flex-col">
              <p className="bg-green-500 text-white text-sm flex items-center p-4 rounded-3xl max-w-96 max-h-full">
                We understand the inconvenience caused and ensure you that our
                team is actively working.
              </p>
            </div> */}
          </div>
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
      </div>
      {/*Fourth Portion: Chat Settings*/}
      <div className="w-1/5 min-h-screen py-16 px-7">
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
            className="bg-gray-300 rounded-full p-1 mr-2"
            sx={{ color: "gray", width: 30, height: 30 }}
          />
          <SearchIcon
            className="bg-gray-300 rounded-full p-1 ml-2"
            sx={{ color: "gray", width: 30, height: 30 }}
          />
        </div>
        <div className="mt-10 ">
          <div className="flex justify-between items-center font-semibold ">
            <p>Customize Chat</p>
            <ChevronRightIcon className="" sx={{ width: 30, height: 30 }} />
          </div>
          <div className="flex justify-between items-center font-semibold mt-4">
            <p>Chat Members</p>
            <ChevronRightIcon className="" sx={{ width: 30, height: 30 }} />
          </div>
          <div className="flex justify-between items-center font-semibold mt-4">
            <p className="flex justify-start">Media and Files</p>
            <ChevronRightIcon
              className="flex justify-end"
              sx={{ width: 30, height: 30 }}
            />
          </div>
          <div className="flex justify-between items-center font-semibold mt-4">
            <p>Privacy & Support</p>
            <ChevronRightIcon className="" sx={{ width: 30, height: 30 }} />
          </div>
        </div>
      </div>
    </div>
  );
}
