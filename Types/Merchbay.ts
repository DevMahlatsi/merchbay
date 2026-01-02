export type ProductLayoutProps = {
  title: string;
  //we are expecting a json file here
}
export type ToastProps = {
  message: string;
  visible: boolean;
  onClose: () => void;
};