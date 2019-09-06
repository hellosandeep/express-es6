import { model } from './model';

function loadUser() {
    return model.user.find()
        .exec()
}

function saveUser(data) {
    return model.user.create(data)
}

export default { loadUser, saveUser }