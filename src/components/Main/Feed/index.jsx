import React, { useContext, useState, useEffect } from "react";
import { Ul, Ulex } from "./style";
import Feeds from "../Feed/Feeds";
import { db } from "../../../firebase/index";
import { SearchContext } from "../../../context/searchContext";
import { IoTabletLandscapeSharp } from "react-icons/io5";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import Post from "../Post";
import Comment from "../Comment";

export default function Feed(props) {
	//Getting the posts collection from Firestore
	const [posts, setPosts] = useState([]);
	const postsCollectionRef = query(
		collection(db, "posts"),
		orderBy(props.filter, "desc")
	);
	// const [commentButton, setCommentButton] = useState(false);

	let result;
	if (props.product != undefined) {
		result = props.product;
	} else {
		result = "";
	}

	// const { tokenProduct, setTokenProduct } = useContext(SearchContext);
	// console.log(tokenProduct);

	// useEffect(()=> {
	// 	setProductName(productName)
	// }, [productName])

	useEffect(() => {
		const getPosts = async () => {
			const data = await getDocs(postsCollectionRef);
			setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
			// console.log(data);
		};

		getPosts();
	}, []);
	if (props.comments == true) {
		return (
			<Ulex>
				{posts.length > 0 &&
					posts
						.filter((value) => {
							if (result === "") {
								return value;
							} else if (
								value.product.toLowerCase().includes(result.toLowerCase())
							) {
								return value;
							}
						})
						.map((value, key) => (
							<>
								<Feeds
									className="join"
									key={key}
									product={value.product}
									price={value.price}
									market={value.market}
									address={value.address}
									precin={value.precin}
									precao={value.precao}
									comments={value.comments}
									openComment={true}
									// button={commentButton}
									// setButton={setCommentButton}
								/>
								{/* {props.comments && commentButton && (
									<Post name="Kristofer" img_url={props.img_url}></Post>
								)}
								{props.comments && commentButton && <Comment></Comment>} */}
							</>
						))}
			</Ulex>
		);
	} else {
		return (
			<Ul>
				{posts.length > 0 &&
					posts
						.filter((value) => {
							if (result === "") {
								return value;
							} else if (
								value.product.toLowerCase().includes(result.toLowerCase())
							) {
								return value;
							}
						})
						.map((value, key) => (
							<>
								<Feeds
									key={key}
									product={value.product}
									price={value.price}
									market={value.market}
									address={value.address}
									precin={value.precin}
									precao={value.precao}
									comments={value.comments}
									openComment={false}
								/>
								{props.comments && <Post name="Kristofer"></Post>}
								{/* {props.comments && <Comments></Comments>} */}
							</>
						))}
			</Ul>
		);
	}
}
