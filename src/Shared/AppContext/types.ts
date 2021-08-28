export type AppContextType = {
  showHeader: boolean;
  showNavigation: boolean;
  setShowHeader?: (visible: boolean) => void;
  setShowNavigation?: (visible: boolean) => void;
};
