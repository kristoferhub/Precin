import styled from "styled-components";

import { IoCloseCircleOutline, IoCartOutline } from "react-icons/io5";

export const IoClose = styled(IoCloseCircleOutline)`
	width: 30px;
	height: 30px;
	stroke: ${({ theme }) => theme.title};
	position: absolute;
	top: 10px;
	right: 15px;
	padding: 5px;
	cursor: pointer;
	opacity: 0.7;

	:hover {
		opacity: 1;
	}
`;

export const IoCart = styled(IoCartOutline)`
	width: 30px;
	height: 30px;
	stroke: ${({ theme }) => theme.title};
`;

export const Container = styled.div`
	position: absolute;
	top: 25px;
	right: 30px;
	border-radius: 12px;
	background: #fff;
	padding: 20px 35px 20px 25px;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
	border-left: 6px solid #4070f4;
	overflow: hidden;
	transform: translateX(calc(100% + 30px));
	transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.35);
`;

export const Content = styled.div`
	display: flex;
	align-items: center;
`;

export const Message = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 20px;

	.text {
		font-size: 20px;
		font-weight: 400;
		color: #666666;
	}
	.text.text-1 {
		font-weight: 600;
		color: #333;
	}
`;

export const Progress = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	height: 3px;
	width: 100%;
	background: #ddd;

	:before {
		content: "";
		position: absolute;
		bottom: 0;
		right: 0;
		height: 100%;
		width: 100%;
		background-color: #4070f4;
	}
	@keyframes progress {
		100% {
			right: 100%;
		}
	}
`;
