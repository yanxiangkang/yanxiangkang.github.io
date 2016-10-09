
/*		项目池
	*   {
	*       projectName: @value String            *         项目名称
	*       projectWebsite: @value String         *         项目网址
	*       startTime: @value String              *         项目开始时间  格式为：2016.10.09
	*       endTime: @value String 			      *         项目结束时间  格式为：2016.10.09
	*       projectExplain: @value String         *         项目说明
	*       projectLabel: @value Array            *         项目技术标签 
			projectThumbnail: @value String       *         缩略图地址
	*       
	*   }
*/

var projects = [
		{
			projectName:"1号店-全站制作",
			projectWebsite:"yanxiangkang.github.io/quanzhan",
		    startTime:"2016.01.01",
			endTime:"至今",
			projectExplain:"JS整站开发之：1号店首页制作-静态页面的首页展示",
			projectLabel:["html","css"],
			projectThumbnail:"quanzhan/img/floor2-2.jpg"
		},
		{
			projectName:"妙味VIP会员感恩墙",
			projectWebsite:"http://v.miaov.com/thanks/",
		    startTime:"2016.01.01",
			endTime:"至今",
			projectExplain:"用户观看视频的主页面，其大部分内容是通过JS加载的。为了提高性能，采用了延迟加载、延迟渲染、事件代理等优化方式。此外，还通过监听页面的window.onerror事件对异常信息进行采集，以便及时发现和排查故障。",
			projectLabel:["html","css3","css","js"],
			projectThumbnail:"images/icon/project-2.png"
		}
]