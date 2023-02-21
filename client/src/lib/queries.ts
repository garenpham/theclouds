export const getAllImgUrl = () => {
	return `*[_type=='gallery']{
    image{
      asset->{
        url,
      }
    }
  }`;
};
