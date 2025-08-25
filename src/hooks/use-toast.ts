export const useToast = () => {
  const toast = (options: { title?: string; description?: string }) => {
    console.log('Toast:', options);
  };
  
  return { toast };
};
