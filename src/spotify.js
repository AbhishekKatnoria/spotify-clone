export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirect_uri = "http://localhost:3000/";

const clientId = "725851c3713f46f48ab03728e250f040";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];
console.log(window.location.hash)
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var part = item.split("=");
      initial[part[0]] = decodeURIComponent(part[1]);

      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirect_uri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
