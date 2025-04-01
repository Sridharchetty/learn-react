import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Itemslist from "./Itemslist";
const RestaurantCategory = ({ data }) => {
  return (
    <AccordionItem value="item-1" className="shadow-lg mb-5">
      <AccordionTrigger className="font-bold text-lg uppercase p-5 w-full">
        {data?.title} ({data?.itemCards?.length})
      </AccordionTrigger>
      <AccordionContent className="p-5">
        <Itemslist items={data?.itemCards} />
      </AccordionContent>
    </AccordionItem>
  );
};

export default RestaurantCategory;
