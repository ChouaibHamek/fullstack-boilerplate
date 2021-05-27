import _ from 'lodash';

export const convertToDisplayedDate = (createdAt) => {
  const messageDate = new Date(createdAt);
  const time = new Date();
  if (messageDate.getYear() === time.getYear()
    && messageDate.getMonth() === time.getMonth()
    && messageDate.getDate() === time.getDate()
  ) {
    return 'Today';
  }
  return `${messageDate.getDate()}/${messageDate.getMonth() + 1}/${messageDate.getYear().toString().slice(1)}`;
};

export const getReceivedTime = (createdAt) => {
  const messageDate = new Date(createdAt);
  const hours = messageDate.getHours().toString();
  const minutes = messageDate.getMinutes().toString();
  const displayedHours = hours.length > 1 ? hours : `0${hours}`;
  const displayedMinutes = minutes.length > 1 ? minutes : `0${minutes}`;
  return `${displayedHours}:${displayedMinutes}`;
};

export const checkValueExists = (valuesList, value) => {
  // valuesList is expected to be an array of objects as in (...constants/index)
  let exists = false;
  for (let i = 0; i < valuesList.length; i += 1) {
    if (valuesList[i].value === value) {
      exists = true;
      break;
    }
  }
  return exists;
};

export const appDataMapper = (data, type) => {
  const dropDownList = [{ key: '0', text: 'Any', value: 'Any' }];
  const sortedData = _.sortBy(data, [o => o[type]]);
  for (let i = 0; i < sortedData.length; i += 1) {
    const textElement = sortedData[i][type];
    dropDownList.push({
      key: sortedData[i][`${type}_id`],
      text: `${textElement.charAt(0).toUpperCase()}${textElement.slice(1)}`,
      value: textElement,
    });
  }
  return dropDownList;
};
