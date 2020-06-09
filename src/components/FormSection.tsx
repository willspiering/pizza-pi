import * as React from "react";
import styled from "styled-components";

export default function FormSection({ children }) {
	return <StyledForm>{children}</StyledForm>;
}

const StyledForm = styled.div`
	background: #337357;
	flex: 1 0 40%;
	display: flex;
	flex-direction: column;
	.current-wrapper {
		position: relative;
		padding: 20px;
		color: white;
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		.label {
			font-size: 1.2em;
		}
		.result {
			font-weight: bold;
			font-size: 3em;
		}
	}
	.form-wrapper {
		background: #171a21ff;
		flex: 1.5;
		color: white;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 20px;
		.form-item {
			margin-bottom: 10px;
			input {
				/* background: #68b684ff;
        color: white; */
				width: 100%;
				border-radius: 10px;
				outline: none;
				border: none;
				padding: 10px 20px;
				font-size: 1.2em;
				&:focus,
				&:active {
					outline: none;
				}
			}
			input::-webkit-outer-spin-button,
			input::-webkit-inner-spin-button {
				-webkit-appearance: none;
				margin: 0;
			}
		}
		.footer {
			display: flex;
			justify-content: space-between;
			/* margin-top:15px; */
			/* margin-bottom: 20px; */
			padding: 5px 0 5px;
			button {
				color: white;
				border: none;
				outline: none;
				font-size: 1.2em;
				padding: 10px 20px;
				border-radius: 10px;
				flex: 1;
				&:hover {
					opacity: 0.8;
				}
			}
			.save-btn {
				background: #db504aff;
				flex: 3;
				margin-right: 15px;
				@media screen and (min-width: 600px) {
					margin-right: 0;
				}
			}
			.view-list-btn {
				background: #68b684ff;
				@media screen and (min-width: 600px) {
					display: none;
				}
			}
		}
	}
`;
