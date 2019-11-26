import { findUserById } from '../repositories';

// nhan data tu ui
// xu li data
// tra ve data cho ui
// service => validate data => goi va thay doi (repository) =>
// repo tra ve data cho service => service resolve data to view obj models => hien thi

export const login = async ({ user, password }) => {
  try {
    const result = findUserById({ id: '10' });
    if (result) {
      return { success: true, message: 'user found' };
    }
    throw new Error('1234');
  } catch (error) {
    return { success: false, message: 'dang nhap that bai' };
  }
};
