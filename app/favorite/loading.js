import { Loader2 } from "lucide-react";

const loading = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      loading
    </div>
  );
};

export default loading;
