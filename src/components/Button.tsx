import { Button as UIButton} from "@/components/ui/button";

interface ButtonProps {
   children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
   
   return (
      <UIButton className="btn btn-primary">{children}</UIButton>
   )
}