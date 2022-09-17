import React from "react";
import Qualitie from "./qualitie";
import Bookmark from "./bookmark";

const User = (props) => {
    return (
        <>
            <tr>
                <td scope="col">{props.name}</td>
                <td scope="col">{props.qualities.map(item => Qualitie(item))}</td>
                <td scope="col">{props.profession.name}</td>
                <td scope="col">{props.completedMeetings}</td>
                <td scope="col">{props.rate} / 5</td>

                <td scope="col">
                    <button
                        className={Bookmark(props.bookmark)}
                        onClick={() => props.onToggleBookMark(props._id)}

                    ></button>
                </td>

                <td scope="col">
                    <button className="btn btn-danger" onClick={() => props.onDelete(props._id)}
                    >Delete
                    <
                    /button>
                </td>
            </tr>
        </>
    )
}

export default User;

