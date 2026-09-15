export interface PasswordFormData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface ProfileAvatarProps {
  name: string;
  phone: string;
  avatar: string;
}

export interface ProfileFormData {
  fullName: string;
  phone: string;
  email: string;
}
