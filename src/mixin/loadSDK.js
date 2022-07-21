export const loadSDK = (id, src, s = "script", d = document) =>
  new Promise((resolve, reject) => {
    const fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;

    const js = d.createElement(s);
    js.id = "facebook-jssdk";
    js.src = src;
    fjs.parentNode.insertBefore(js, fjs);

    js.onload = () => resolve();
    js.onerror = () => reject();
  });
