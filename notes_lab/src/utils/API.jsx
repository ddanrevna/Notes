const URL = "http://localhost:5001";
export default class API {
  static createNote(userId, title, text) {
    const createdAt = Date.now();
    return fetch(`${URL}/notes`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ userId, title, text, createdAt }),
    }).then((response) => response.json());
  }
  static signUp(email, password) {
    const createdAt = Date.now();
    return fetch(`${URL}/users`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ email, password, createdAt }),
    }).then((response) => response.json());
  }
  static editNote(id, title, text) {
    return fetch(`${URL}/notes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        title,
        text,
      }),
    }).then((response) => response.json());
  }
  static deleteNote(id) {
    fetch(`${URL}/notes/${id}`, {
      method: "DELETE",
    }).then((response) => response.json());
  }
  static getNote(id) {
    return fetch(`${URL}/notes/${id}`).then((response) => {
      if (response.ok) {
        return response.json();
      } else throw new Error("No such note found.");
    });
  }
  static getNotes(userId) {
    return fetch(`${URL}/notes?userId=${userId}`).then((response) => {
      if (response.ok) {
        return response.json();
      } else throw new Error("No such notes found.");
    });
  }
  static getUser(id) {
    return fetch(`${URL}/users?id=${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else throw new Error("No such users found.");
      })
      .then((users) => users[0]);
  }
  static getUsers() {
    return fetch(`${URL}/users`).then((response) => {
      if (response.ok) {
        return response.json();
      } else throw new Error("No such users found.");
    });
  }

  static getUsersByQuery(query) {
    return fetch(`${URL}/users?${query}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else throw new Error("No such users found.");
      })
      .then((users) => users[0]);
  }
}
