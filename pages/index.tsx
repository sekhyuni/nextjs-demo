import React from "react";
import Link from "next/link";

const index = () => {
    return (
        <ul>
            <li>
                <Link href={"/home"}>
                    home으로 갑니다!
                </Link>
            </li>
            <li>
                <Link href={"/me"}>
                    me로 갑니다!
                </Link>
            </li>
        </ul>
    );
};

export default index;