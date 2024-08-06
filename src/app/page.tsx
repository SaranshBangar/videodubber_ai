import Navbar from "./components/Navbar";
import Breadcrumbs from "./components/Breadcrumbs";
import ProductTitle from "./components/ProductTitle";
import ProductDescription from "./components/ProductDescription";
import ImageGallery from "./components/ImageGallery";
import Makers from "./components/Makers";

export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
      </div>
      <div>
        <Breadcrumbs />
      </div>
      <div>
        <ProductTitle />
      </div>
      <div>
        <ProductDescription />
      </div>
      <div>
        <ImageGallery />
      </div>
      <div>
        <Makers />
      </div>
    </main>
  );
}
