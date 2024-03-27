import { FacebookShareButton, LinkedinShareButton, EmailShareButton, FacebookIcon, LinkedinIcon, EmailIcon } from 'react-share';
import * as Icon from 'react-bootstrap-icons';


export default function ShareIcon() {
    return (
        <div className='col-sm-4'>
          <Icon.Share className='mx-3 my-2'/>
          

          <FacebookShareButton
            url={'https://www.travelwikkimedia.com'}
            className='mx-2'
          >
            <FacebookIcon size={30} round />
          </FacebookShareButton>

          <LinkedinShareButton
            url={'https://www.travelwikkimedia.com'}
            className='mx-2'
          >
            <LinkedinIcon size={30} round />
          </LinkedinShareButton>

          <EmailShareButton
            url={'https://www.travelwikkimedia.com'}
            className='mx-2'
          >
            <EmailIcon size={30} round />
          </EmailShareButton>

          <Icon.Bookmark className='mx-2'/>

        </div>

    );
};