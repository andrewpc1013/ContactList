import React from 'react';

const Favorite = (props) => {
  const { selectedContact, selectContact } = props;
  selectedContact.favorite = false;
  
  const updateFavoriteStatus = async ({id, favorite}) => {
    await selectContact(id, {favorite: !favorite});
  };

  return (
    <div className="fav-container" onClick={() => {updateFavoriteStatus({selectedContact})}}>
      {selectedContact.favorite ? (
        <img className="fav-image" src="/checked.png"></img>
      ) : (
        <img className="fav-image" src="/unchecked.png"></img>
      )}
      <span>Favorite</span>
    </div>
  );
};

export default Favorite;