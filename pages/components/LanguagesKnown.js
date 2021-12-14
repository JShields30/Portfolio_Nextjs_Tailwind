/* This example requires Tailwind CSS v2.0+ */
import {
    CloudUploadIcon,
    CogIcon,
    LockClosedIcon,
    RefreshIcon,
    ServerIcon,
    ShieldCheckIcon,
    ChipIcon
  } from '@heroicons/react/outline'
  
  const features = [
    { name: 'Front-End', icon: CloudUploadIcon, description: 'Blah Blah' },
    { name: 'Back End', icon: LockClosedIcon, description: 'Blah Blah' },
    { name: 'Tools', icon: ChipIcon, description: 'Blah Blah' },
    { name: 'Advanced Security', icon: ShieldCheckIcon, description: 'Blah Blah' },
    { name: 'Powerful API', icon: CogIcon },
    { name: 'Database Backups', icon: ServerIcon },
  ]
  
  export default function LanguagesKnown() {
    return (
      <div className="relative bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">Joe Shields</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            My Experience 
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
           Specialist Generalist
          </p>
          <div className="mt-12">
            <div className=" h-full grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                          <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                      <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  