import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import {
	IoPersonCircleOutline,
	IoHelpCircleOutline,
	IoCartOutline,
	IoBookmarkOutline,
	IoExtensionPuzzleOutline,
} from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
export const SidebarData = [
	{
		label: "Precinhos",
		icon: <AiOutlineHome />,
		to: "/",
		notification: 0,
	},
	{
		label: "Publicar",
		icon: <IoExtensionPuzzleOutline />,
		to: "/publication",
		notification: 0,
	},
	{
		label: "Perfil",
		icon: <IoPersonCircleOutline />,
		to: "/login",
		notification: 0,
	},
	{
		label: "Publicações",
		icon: <IoBookmarkOutline />,
		to: "/yourpublic",
		notification: 0,
	},
	{
		label: "Minha Lista",
		icon: <IoCartOutline />,
		to: "/listshop",
		notification: 0,
	},
];

export const Settings = [
	{
		label: "Configurações",
		icon: <AiOutlineSetting />,
	},
	{
		label: "Suporte",
		icon: <IoHelpCircleOutline />,
	},
];

export const Settings2 = [
	{
		label: "Configurações",
		icon: <AiOutlineSetting />,
	},
	{
		label: "Suporte",
		icon: <IoHelpCircleOutline />,
	},
	{
		label: "Sair",
		icon: <MdLogout />,
	},
];
