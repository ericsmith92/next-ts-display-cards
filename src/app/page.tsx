import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface CodeProps extends PropsWithChildren {
  className?: string;
}

function Code({ children, className }: CodeProps) {
  return (
    <code
      className={cn(
        "bg-gray-100 px-2 py-1 rounded text-sm font-mono",
        className
      )}
    >
      {children}
    </code>
  );
}

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="border rounded-lg px-6 py-8 mt-10 bg-white shadow-sm">
        <h1 className="text-3xl font-bold mb-6">Take Home Assignment</h1>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-3">Objective</h2>
            <p className="text-gray-700 mb-4">
              Create a reusable <Code>DisplayCard</Code> component that
              demonstrates your TypeScript, React, and design skills.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Requirements</h2>
            <ol className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0">
                  1
                </span>
                <span>
                  Build a <Code>DisplayCard</Code> component with three props:
                  <Code>title</Code> (string), <Code>description</Code>{" "}
                  (string), and <Code>imageUrl</Code> (string).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0">
                  2
                </span>
                <span>
                  Style the component using Tailwind CSS. The design is entirely
                  up to you—showcase your aesthetic sense.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0">
                  3
                </span>
                <span>
                  Ensure the component is fully responsive and looks great on
                  both desktop and mobile viewports.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0">
                  4
                </span>
                <span>
                  Implement two visual variants: <Code>default</Code> and{" "}
                  <Code>featured</Code>. The <Code>featured</Code> variant
                  should be visually distinct (larger, different colors, etc.).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0">
                  5
                </span>
                <span>
                  Create a demo section on this page showing both variants with
                  sample content.
                </span>
              </li>
            </ol>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">
              Technical Expectations
            </h2>
            <ul className="space-y-2 text-gray-700 list-disc list-inside marker:text-green-500">
              <li>Properly typed TypeScript interfaces for all props</li>
              <li>Clean, readable component structure</li>
              <li>Proper image handling (alt text, loading states)</li>
              <li>Consistent code formatting and naming conventions</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Evaluation Criteria</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">
                  Code Quality (50%)
                </h3>
                <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                  <li>TypeScript implementation</li>
                  <li>Component clarity & composition</li>
                  <li>Code organization</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">
                  Design & UX (50%)
                </h3>
                <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                  <li>Visual design quality</li>
                  <li>Responsive behavior</li>
                  <li>Variant differentiation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-medium text-blue-900 mb-2">💡 Bonus Points</h3>
            <p className="text-blue-800 text-sm">
              Add hover effects, smooth transitions, or accessibility features
              like keyboard navigation.
            </p>
          </div>

          <div className="border-t pt-4">
            <p className="text-sm text-gray-600">
              <strong>Time Estimate:</strong> 45-60 minutes •
              <strong>Deliverable:</strong> Working component with demo examples
              below
            </p>
          </div>
        </div>
      </div>

      {/* Demo Section Placeholder */}
      <div className="border rounded-lg px-6 py-8 mt-8 bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">Your Component Demo</h2>
        <p className="text-gray-600 mb-6">
          Replace this section with examples of your DisplayCard component:
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Default Variant</h3>
            <div className="bg-white p-4 border rounded border-dashed">
              <p className="text-gray-500 text-center">
                Your default DisplayCard components go here
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Featured Variant</h3>
            <div className="bg-white p-4 border rounded border-dashed">
              <p className="text-gray-500 text-center">
                Your featured DisplayCard components go here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
