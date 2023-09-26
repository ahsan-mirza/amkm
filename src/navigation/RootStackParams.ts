
export type AuthStackI = {
  LoginScreen: undefined;
};



export type registerUserI={
  Timeline: undefined;
}
export type MainStack = {
  // Home: undefined;
  // Booking: undefined;
    DashBoardStack: registerUserI;
    AuthStack: AuthStackI;

};



