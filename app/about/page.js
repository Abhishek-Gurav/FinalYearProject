import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

export default function App() {
  return (
    <div className="mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="font-bold mb-6">Welcome to GroundWise</h1>
      <Card >
      <CardHeader className="flex gap-3">
        <Image
          alt="about"
          height={700}
          src="https://teamtweaks1-blog.s3.us-east-2.amazonaws.com/blog/wp-content/uploads/2021/10/08122042/Effective-Smart-water-management-with-IoT.png"
          width={700}
        />
        <div className="flex flex-col">
          <p className="text-small text-default-500">Are you tired of searching for scattered data on groundwater quality
        across different Indian states? Look no further! GroundWise is here to
        revolutionize your access to crucial environmental data. Our platform
        offers a centralized repository of water quality data, focusing
        specifically on groundwater, sourced from the National Water Monitoring
        Programme (NWMP) for the year 2022.</p>
        </div>
      </CardHeader>
      </Card>
      <h2 className=" font-bold mb-4">Why GroundWise?</h2>
      <p className="text-gray-700 dark:text-slate-300 mb-6">
        <strong>Centralized Data Repository:</strong> Say goodbye to the hassle
        of scouring multiple sources for groundwater quality data. GroundWise
        provides a one-stop solution for accessing comprehensive information on
        water quality parameters across various Indian states.
      </p>
      <p className="text-gray-700 dark:text-slate-300 mb-6">
        <strong>User-Friendly Interface:</strong> Our intuitive interface
        ensures seamless navigation, allowing users to effortlessly explore and
        analyze groundwater quality data.
      </p>
      <p className="text-gray-700 dark:text-slate-300 mb-6">
        <strong>In-depth Insights:</strong> Gain valuable insights into
        groundwater quality through detailed analyses of key parameters such as:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li>Temperature</li>
        <li>pH</li>
        <li>Conductivity</li>
        <li>BOD (Biochemical Oxygen Demand)</li>
        <li>Nitrate-N + Nitrite-N</li>
        <li>Fecal Coliform and Total Coliform</li>
        <li>Total Dissolved Solids (TDS)</li>
        <li>Fluoride and Arsenic</li>
      </ul>
      <p className="text-gray-700 dark:text-slate-300 mb-6">
        <strong className="dark:text-white">Database and Statistics:</strong> Explore
        our extensive database featuring groundwater quality data from diverse
        monitoring locations across Indian states. Utilize advanced statistical
        tools and algorithms to analyze trends, correlations, and anomalies in
        the data.
      </p>
      <p className="text-gray-700 dark:text-slate-300 mb-6">
        <strong className="dark:text-white">Interactive Visualization:</strong>{" "}
        Experience groundwater quality data like never before with our
        interactive visualization tools. Create customized charts, graphs, and
        maps to visualize spatial and temporal variations in water quality
        parameters, facilitating deeper insights and understanding.
      </p>
      <p className="text-gray-700 dark:text-slate-300 mb-6">
        <strong className="dark:text-white">Educational Resources:</strong> Access
        informative articles, guides, and tutorials to deepen your understanding
        of groundwater quality and its significance for environmental management
        and public health.
      </p>
      <p className="text-gray-700 dark:text-slate-300 mb-6">
        <strong className="dark:text-white">Regular Updates:</strong> Stay informed
        with the latest updates and developments in groundwater quality
        monitoring and management practices through our regularly updated
        content and news section.
      </p>
      <p className="text-gray-700 dark:text-slate-300 mb-6">
        GroundWise is more than just a database – it's a valuable resource for
        researchers, policymakers, environmental professionals, and anyone
        concerned about safeguarding our precious groundwater resources. Join us
        in our mission to promote sustainable water management and protect the
        health of our environment and communities.
      </p>
      <p className="text-gray-700 dark:text-slate-300 mb-6">
        Explore GroundWise today and unlock the power of centralized groundwater
        quality data for a brighter, more sustainable future.
      </p>
    </div>
  );
}
