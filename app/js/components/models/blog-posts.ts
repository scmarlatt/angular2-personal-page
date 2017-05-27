import { CustomPost } from './custom-post';

export const BLOGPOSTS: CustomPost[] = [
	{
	    date: 'Apr. 2, 2017 :: 11:22PM',
    	html: ` <h2>Something Clever</h2><br>
				<h3>{{selectedBlogPost.date}}</h3>
				<br>
				<div class="climate-text">
					<p>Hey everyone! First and foremost, thanks for reading. I'm not really sure how long I'll keep this up for, but it's been something I've been meaning to work on for a while, so here's me taking a crack at it.</p>
					<br>
					<p>Where do I even begin? If you're wondering what's</p>
				</div>`,
	    id: 2,
    	img: 'https://s3-us-west-1.amazonaws.com/scm-personal-page/personal-page/images/blog/25-1-2017/DSC02896.jpg',
    	title: 'there & back',
	},
	{
	    date: 'Jan. 23, 2017 :: 1:24AM',
    	html: ` <h2>Past Due</h2><br>
				<h3>{{selectedBlogPost.date}}</h3>
				<br>
				<div class="climate-text">
					<p>In light of recent events, I can no longer remain silent. My belief in this nation's ability to help tackle the most daunting but important challenge our species has ever faced just vanished overnight. Rapid climate change is a real thing. It has long been time for all of us to take action, but that doesn't mean it's too late for those of us who haven't taken action yet, to take action.</p>
					<p>We are on the brink of having caused irreparable damage to our planet, and our window is closing. The problem is getting worse, and we as a whole are not acting fast enough. The timetable has gone from a few centuries out, to a few decades out, and if this trend continues, it could turn into a few years out. It's time to <b>wake up</b>.</p>
					<p>Join me as I educate myself and attempt to educate others on this topic. Stop by often for new subject matter, and share it with the world. This is a problem greater than a people, or a nation. It doesn't matter your race, gender, ethnicity, or social status. The one common thing everyone living on this planet can say is that this planet is <i><b>our</b></i> home and the time to act is now. </p>
					<p>If you're already here and made it this far, take a few moments to look at this graphic from the popular webcomic series <a href="https://xkcd.com/"><b>xkcd</b></a>. They do an excellent job of providing the history of global temperature fluctuation, and also putting into perspective its impact along the way. It's a start to understanding rapid climate change, and hopefully, everyone viewing it for the first time can learn a thing or two.</p>
					<br>
					<br>
					<div class="img-cluster-1">
						<img src="https://imgs.xkcd.com/comics/earth_temperature_timeline.png">
					</div>
					<br>
					<p class="xkcd-text">"[After setting your car on fire] Listen, your car's temperature has changed before."</p>
				</div>`,
		id: 1,
    	img: 'https://s3-us-west-1.amazonaws.com/scm-personal-page/personal-page/images/blog/11-12-2016/windy-hill.JPG',
	    title: 'past due',
	},
	{
	    date: 'Oct. 29, 2016 :: 9:09PM',
    	html: `<h2>Winding Down</h2><br>
				<h3>{{selectedBlogPost.date}}</h3><br>
				<p><b>what a summer it was</b></p>
				<p>Welp, that flew by. My first summer in SF is already a few months behind me. I've been working hard to get this here blog-thing up and running so I know I'm a little late with this recap (how is it mid November already?), but bear with me.</p>
				<p>For some reason it really doesn't feel like it's over. It's probably because I'm still thrown off by the fact that it doesn't really ever get cold here in the south bay. I mean, seriously, it's really confusing when I am in this mindstate that summer is still not over, and then I start to see Christmas decorations when I'm out and about. That's some sh*t I've never experienced before. My entire life I've associated Christmas with the frigid Midwest winters. 22 years of them! It just doesn't feel right.</p>
				<p>Maybe it's also because this summer was so busy, and such a great time that I just won't let it be over. The last few months have been filled with new people, new places, new things, side projects, visitors, concerts, weddings, and travel. Now these are all things I'd love to have year round, but I've never had such a jam packed stretch. <b>I...</b></p>
				<div class="img-cluster-3"><img src="https://s3-us-west-1.amazonaws.com/scm-personal-page/personal-page/images/blog/11-12-2016/almond-butter.jpg"><img src="https://s3-us-west-1.amazonaws.com/scm-personal-page/personal-page/images/blog/11-12-2016/chocolate-sourdough.jpg"><img src="https://s3-us-west-1.amazonaws.com/scm-personal-page/personal-page/images/blog/11-12-2016/farmers-market.JPG"></div>
				<br>
				<div class="img-cluster-2"><img src="https://s3-us-west-1.amazonaws.com/scm-personal-page/personal-page/images/blog/11-12-2016/chocolate-sourdough.jpg"><img src="https://s3-us-west-1.amazonaws.com/scm-personal-page/personal-page/images/blog/11-12-2016/farmers-market.JPG"></div>
				<p>sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample </p>`,
	    id: 0,
    	img: 'https://s3-us-west-1.amazonaws.com/scm-personal-page/personal-page/images/blog/castro-sunset.jpg',
    	title: 'winding down',
	},
];
