import profileReducer, {addPost, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Люблю шоколад', likesCount: 99},
        {id: 2, message: 'І тебе також люблю', likesCount: 2},
        {id: 3, message: 'Хочу подарити світу радість', likesCount: 10}
    ]
}

test('length of posts should be incremented', () => {
    // Arrange
    let action = addPost('Post test')


    // Act
    let newState = profileReducer(state, action)

    // Assert
    expect(newState.posts.length).toBe(4)
});

test('message of new post shoud be correct', () => {
    // Arrange
    let action = addPost('Post test')


    // Act
    let newState = profileReducer(state, action)

    // Assert
    expect(newState.posts[3].message).toBe('Post test')
});
test('after deleting length of posts should be decremented', () => {
    // Arrange
    let action = deletePost(1)

    // Act
    let newState = profileReducer(state, action)

    // Assert
    expect(newState.posts.length).toBe(2)
});

test(`after deleting length should not be decremented if id is incorrect`, () => {
    // Arrange
    let action = deletePost(100)

    // Act
    let newState = profileReducer(state, action)

    // Assert
    expect(newState.posts.length).toBe(3)
});



