function makeFriendsList(friends) {
  let list = document.createElement("ul");
  list.id = "qwerty";
  let friendsFilter = friends.map(
    (elem) => `${elem.firstName} ${elem.lastName}`
  );
  for (let i = 0; i < friendsFilter.length; i += 1) {
    let item = document.createElement("li");
    item.innerHTML = friendsFilter[i];
    list.append(item);
  }
  return list;
}
