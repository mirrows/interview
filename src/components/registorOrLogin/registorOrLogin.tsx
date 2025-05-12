"use client";
import { FacebookOutlined } from '@ant-design/icons';
import { useState } from 'react';

type Props = {
  type: string;
}

export default function RegistorOrLogin({ type }: Props) {
  const [setupPasswordShow, setSetupPasswordShow] = useState(false);
  return (
    <>
      {type === 'registor' && <form action="/en/nc/signup" method="post">
        <input type="hidden" name="authenticity_token" value="" />
        <input type="hidden" name="signup[form_id]" value="body-20230118-wcl_reader_signup_wall" />
        <input type="hidden" name="signup[pre_signup_data]" value="" />
        <div className="mb-4">
          <input id="signup-email" name="signup[email]" placeholder="Email address" type="email" className="rounded-md border-2 border-solid border-light-grey px-4 h-12 w-full focus:border-green focus-visible:outline-none" />
        </div>
        <div className="flex-1 inline-block w-full mb-4">
          <div className="rounded-md border-2 border-solid border-light-grey focus:border-green focus-visible:outline-none w-full flex items-center">
            <input id="signup-password" name="signup[password]" placeholder="Create password" type={setupPasswordShow ? 'text' : 'password'} className="px-4 h-11 w-full" />
            <button type="button" className="inline-flex shrink font-medium text-sm text-mid-grey pr-4" onClick={() => setSetupPasswordShow(!setupPasswordShow)}> {setupPasswordShow ? 'Hide' : 'Show'} </button>
          </div>
        </div>
        <button type="submit" className="w-full rounded border-none font-cera-pro font-medium text-base leading-5 text-center items-center justify-center no-underline outline-none disabled:bg-light-grey cursor-pointer disabled:cursor-not-allowed px-4 bg-green-400 text-midnight hover:bg-green-2 hover:text-midnight disabled:text-white py-3"> Create account </button>
        <div className="my-8 w-full h-px bg-gray-300 flex justify-center items-center">
          <span className="bg-white px-4 font-medium text-mid-grey text-sm mb-1"> or</span>
        </div>
        <button type="button" className="mb-4 py-1.5 pl-4 w-full flex align-middle text-center bg-facebook text-white rounded h-10 border-2 border-solid border-transparent">
          <FacebookOutlined />
          <span className="text-center w-full font-medium">Sign up with Facebook</span>
        </button>
        <div className="w-full flex justify-center">
          <div className="mb-4 overflow-hidden max-h-10"></div>
        </div>
        <a href="/en/nc/apple_login?pre_signup_data=%7B%22books_to_add%22%3A%5B%5D%2C%22categories_to_follow%22%3A%5B%5D%2C%22content_views_to_report%22%3A%5B%7B%22content_type%22%3A%22book%22%2C%22content_id%22%3A%22592933bbb238e10007b6b0a5%22%2C%22viewed_at%22%3A%222025-05-10T07%3A38%3A12.819Z%22%7D%2C%7B%22content_type%22%3A%22book%22%2C%22content_id%22%3A%2255f69a1429161a0009000001%22%2C%22viewed_at%22%3A%222025-05-10T07%3A38%3A27.469Z%22%7D%2C%7B%22content_type%22%3A%22book%22%2C%22content_id%22%3A%225bf9dc9c6cee070007cab481%22%2C%22viewed_at%22%3A%222025-05-10T08%3A10%3A18.725Z%22%7D%2C%7B%22content_type%22%3A%22topic%22%2C%22content_id%22%3A%223068c543-87aa-46a7-928a-655de106d3d1%22%2C%22viewed_at%22%3A%222025-05-10T08%3A47%3A10.938Z%22%7D%2C%7B%22content_type%22%3A%22book%22%2C%22content_id%22%3A%225bf9dc9c6cee070007cab481%22%2C%22viewed_at%22%3A%222025-05-10T08%3A47%3A16.154Z%22%7D%2C%7B%22content_type%22%3A%22book%22%2C%22content_id%22%3A%225c43b2fa6cee07000701bf7a%22%2C%22viewed_at%22%3A%222025-05-10T09%3A39%3A24.776Z%22%7D%2C%7B%22content_type%22%3A%22author%22%2C%22content_id%22%3A%22f72fbb37-3e49-462c-8252-83c6512dd70b%22%2C%22viewed_at%22%3A%222025-05-10T09%3A40%3A40.963Z%22%7D%2C%7B%22content_type%22%3A%22book%22%2C%22content_id%22%3A%225c43b2fa6cee07000701bf7a%22%2C%22viewed_at%22%3A%222025-05-10T09%3A40%3A45.350Z%22%7D%2C%7B%22content_type%22%3A%22author%22%2C%22content_id%22%3A%22f72fbb37-3e49-462c-8252-83c6512dd70b%22%2C%22viewed_at%22%3A%222025-05-10T09%3A40%3A47.659Z%22%7D%2C%7B%22content_type%22%3A%22book%22%2C%22content_id%22%3A%225c43b2fa6cee07000701bf7a%22%2C%22viewed_at%22%3A%222025-05-11T01%3A23%3A26.135Z%22%7D%5D%7D" rel="nofollow" className="inline-block px-4 py-2.5 h-10 rounded border border-black border-solid items-center justify-center no-underline outline-none cursor-pointer w-full box-border mb-4">
          <div className="flex items-center justify-center text-center">
            <img src="https://static.blinkist.com/wcl/auth-popup/apple_signup_en.png" alt="Continue with Apple" loading="lazy" className="object-contain h-5" aria-label="Continue with Apple" />
          </div>
        </a>
        <div className="mb-8 text-center font-normal text-xs text-grey">
          <span>Our <a target="_blank" href="javascript:void(0)" className="underline">Terms of Service</a> apply. For more info on our data processing, see our <a target="_blank" href="javascript:void(0)" className="underline">Privacy Policy</a>.</span>
        </div>
      </form>}
      {type === 'login' && (
        <form action="/en/nc/login" method="post">
          <div className="flex gap-4">
            <div className="w-1/2">
              <button data-test-id="facebook-login-button" type="button" className="mb-4 py-1.5 pl-4 w-full flex align-middle text-center bg-facebook text-white rounded h-10 border-2 border-solid border-transparent">
                <svg viewBox="0 0 81 156" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 text-white"><path d="M52.584 155.139V84.378h23.742l3.562-27.585H52.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C78.325.752 69.661 0 59.577 0 38.52 0 24.104 12.853 24.104 36.452v20.341H.29v27.585h23.814v70.761h28.48z" fill="currentColor"></path></svg>
                <span className="text-center w-full font-medium">Log in</span>
              </button>
            </div>
            <div className="w-1/2">
              <div className="w-full flex justify-center">
                <div className="mb-4 overflow-hidden max-h-10"></div>
              </div>
            </div>
          </div>
          <a data-test-id="apple-login-button" href="/en/nc/apple_login?last_page_before_login=https%3A%2F%2Fwww.blinkist.com%2Fen%2Fbooks%2Fthe-5-am-club-en%23book-review-section&amp;pre_signup_data=%7B%22books_to_add%22%3A%5B%5D%2C%22categories_to_follow%22%3A%5B%5D%2C%22content_views_to_report%22%3A%5B%7B%22content_type%22%3A%22topic%22%2C%22content_id%22%3A%223068c543-87aa-46a7-928a-655de106d3d1%22%2C%22viewed_at%22%3A%222025-05-10T08%3A47%3A10.938Z%22%7D%2C%7B%22content_type%22%3A%22book%22%2C%22content_id%22%3A%225bf9dc9c6cee070007cab481%22%2C%22viewed_at%22%3A%222025-05-10T08%3A47%3A16.154Z%22%7D%2C%7B%22content_type%22%3A%22book%22%2C%22content_id%22%3A%225c43b2fa6cee07000701bf7a%22%2C%22viewed_at%22%3A%222025-05-10T09%3A39%3A24.776Z%22%7D%2C%7B%22content_type%22%3A%22author%22%2C%22content_id%22%3A%22f72fbb37-3e49-462c-8252-83c6512dd70b%22%2C%22viewed_at%22%3A%222025-05-10T09%3A40%3A40.963Z%22%7D%2C%7B%22content_type%22%3A%22book%22%2C%22content_id%22%3A%225c43b2fa6cee07000701bf7a%22%2C%22viewed_at%22%3A%222025-05-10T09%3A40%3A45.350Z%22%7D%2C%7B%22content_type%22%3A%22author%22%2C%22content_id%22%3A%22f72fbb37-3e49-462c-8252-83c6512dd70b%22%2C%22viewed_at%22%3A%222025-05-10T09%3A40%3A47.659Z%22%7D%2C%7B%22content_type%22%3A%22book%22%2C%22content_id%22%3A%225c43b2fa6cee07000701bf7a%22%2C%22viewed_at%22%3A%222025-05-11T01%3A23%3A26.135Z%22%7D%2C%7B%22content_type%22%3A%22topic%22%2C%22content_id%22%3A%223aff4b72-1173-489b-a632-f579ef9f23c4%22%2C%22viewed_at%22%3A%222025-05-11T01%3A26%3A46.513Z%22%7D%2C%7B%22content_type%22%3A%22book%22%2C%22content_id%22%3A%22512750e7e4b0714805cbbe9d%22%2C%22viewed_at%22%3A%222025-05-11T01%3A26%3A54.039Z%22%7D%2C%7B%22content_type%22%3A%22book%22%2C%22content_id%22%3A%225c43b2fa6cee07000701bf7a%22%2C%22viewed_at%22%3A%222025-05-11T03%3A15%3A38.364Z%22%7D%5D%7D" rel="nofollow" className="inline-block px-4 py-2.5 h-10 rounded border border-black border-solid items-center justify-center no-underline outline-none cursor-pointer w-full box-border">
            <div className="flex items-center justify-center text-center">
              <img src="https://static.blinkist.com/wcl/auth-popup/apple_login_en.png" alt="Continue with Apple" loading="lazy" className="object-contain h-5" aria-label="Continue with Apple" />
            </div>
          </a>
          <a data-test-id="button-link" href="/en/auth/b2b?last_page_before_login=https://www.blinkist.com/en/books/the-5-am-club-en#book-review-section" rel="nofollow" className="w-full mt-4 inline-block px-4 rounded border-none font-cera-pro font-medium text-base leading-5 text-center no-underline outline-none cursor-pointer disabled:cursor-not-allowed bg-midnight !text-white hover:bg-deep-black hover:!text-white py-3">Log in with SSO</a>
          <div className="my-8 w-full h-px bg-gray-300 flex justify-center items-center">
            <span className="bg-white px-4 font-medium text-mid-grey text-sm mb-1"> or</span>
          </div>
          <input type="hidden" name="last_page_before_login" value="https://www.blinkist.com/en/books/the-5-am-club-en#book-review-section" />
          <input type="hidden" name="authenticity_token" value="pMqFSKMtUmVsWT6RBM2/rmfPDpc4d8vNyuDAkDQroLY/VLrIOrB528PNieKWmXxONhsv/fkeQ478Na4tySWVPw==" />
          <input type="hidden" name="login[form_id]" value="body-20230118-wcl_auth_popup" />
          <input type="hidden" name="login[pre_signup_data]" value="" />
          <div className="mb-4">
            <input id="login-email" name="login[email]" data-test-id="login-email-input" placeholder="Email address" type="email" className="rounded-md border-2 border-solid border-light-grey px-4 h-12 w-full focus:border-green focus-visible:outline-none" />
          </div>
          <div className="flex-1 inline-block w-full mb-4">
            <div className="rounded-md border-2 border-solid border-light-grey focus:border-green focus-visible:outline-none w-full flex items-center">
              <input id="login-password" name="login[password]" data-test-id="login-password-input" placeholder="Password" type="password" className="px-4 h-11 w-full" />
              <button type="button" className="inline-flex shrink font-medium text-sm text-mid-grey pr-4"> Show </button>
            </div>
          </div>
          <button type="submit" data-test-id="b-button" className="w-full rounded border-none font-cera-pro font-medium text-base leading-5 text-center items-center justify-center no-underline outline-none disabled:bg-light-grey cursor-pointer disabled:cursor-not-allowed px-4 bg-green-400 text-midnight hover:bg-green-600 hover:text-midnight disabled:text-white py-3"> Log in with email </button>
          <a data-test-id="b-link" href="/en/nc/reset-password" className="p-6 flex justify-center  cursor-pointer text-blue hover:text-blue-1"> Forgot your password? </a>
        </form>
      )}
    </>
  )
}