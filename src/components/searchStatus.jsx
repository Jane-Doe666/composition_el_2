import React from "react";

const SearchStatus = ({length})=>{
    const lastOne = Number(length.toString().slice(-1))
    if (length > 4 && length < 15) return `${length} Человек тусанет`;
    if ([2, 3, 4].indexOf(lastOne) >= 0) return `${length} Человека тусанут`;
    if (lastOne === 1) return `${length} Человек тусанет`;
}

export default SearchStatus;
