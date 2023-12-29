import {
  EnumGender,
  FamilyRole,
  StudentStatus
} from 'src/common/@types/common.interface';

export const getGenderLabel = (gender: string) => {
  console.log('gender', gender);
  switch (gender) {
    case EnumGender.MALE:
      return 'Nam';
    case EnumGender.FEMALE:
      return 'Nữ';
    default:
      return '';
  }
};

export const getStudentStatuslabel = (status: string) => {
  switch (status) {
    case StudentStatus.ACTIVE:
      return 'Hoạt động';
    case StudentStatus.INACTIVE:
      return 'Không hoạt động';
    default:
      return '';
  }
};

export const getFamilyRoleLabel = (role: string) => {
  switch (role) {
    case FamilyRole.DAD:
      return 'Bố';
    case FamilyRole.MOM:
      return 'Mẹ';
    default:
      return '';
  }
};

export const getAge = (date: string) => {
  const currentDate = new Date();
  const birthDate = new Date(date);

  let age = currentDate.getFullYear() - birthDate.getFullYear();

  if (
    currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};

export const getBirthDate = (birthDate: string) => {
  const dateObject = new Date(birthDate);

  const day = dateObject.getDate().toString().padStart(2, '0');
  const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
  const year = dateObject.getFullYear();

  return `${day}-${month}-${year}`;
};

export const formatDateString = (data: string) => {
  const date = new Date(data);
  const formattedDate = date.toLocaleString('vi-VN', { timeZone: 'UTC' });
  return formattedDate;
};
