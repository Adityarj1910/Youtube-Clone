const cardContainer = document.getElementById("main");
const sidebarSubscriptions = document.getElementById("subscription");

const cards = [
    {
        thumbnail : 'https://i.ytimg.com/vi/6TYkDy54q4E/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBWCIWtkNOQuG_8cs42HbQygXoCTA', 
        duration : '11:11', 
        profile: 'https://yt3.googleusercontent.com/UlKrbeZ4Xz79DUbEbF3FvC0FQ4A_cvpIIzhJQ_wigP8CL_Xf_WF-ryYrrtGpqpD9WzAplsUz=s176-c-k-c0x00ffffff-no-rj',
        title : 'ImNotGoodEnough.js',
        channelName: 'Hyperplexed',
        views: '637k',
        time : '1 year'
    },
    {
        thumbnail : 'https://i.ytimg.com/vi/rioc6mTWOZs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDJiTR6fmKJU7LmK2o1lfq5F7PXEw', 
        duration : '24:26', 
        profile: 'https://yt3.ggpht.com/ytc/AOPolaQ2iMmw9cWFFjnwa13nBwtZQbl-AqGYkkiTqNaTLg=s68-c-k-c0x00ffffff-no-rj',
        title : 'Photoshopping YOUR Drawings! | Realistified! S1E3',
        channelName: 'Benny Productions',
        views: '11M',
        time : '2 years'
    },
    {
        thumbnail : 'https://i.ytimg.com/vi/-QgJgZCJvo4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB_2KVRoB69h4VCTsgcCODnftemTA', 
        duration : '37:45', 
        profile: 'https://yt3.googleusercontent.com/ytc/AOPolaS101j27Disa_BYArytv-hXMRl8wNMtqZMTkrfH=s176-c-k-c0x00ffffff-no-rj',
        title : 'I Challenged The CSS King To A CSS Battle',
        channelName: 'Web Dev Simplified',
        views: '1.2M',
        time : '2 years'
    },
    {
        thumbnail : 'https://i.ytimg.com/vi/pY-kr8DgnWk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDfnmE-lFvJm6jPhcTdJz6-fIe95A', 
        duration : '15:01', 
        profile: 'https://yt3.googleusercontent.com/okRlBwXJN68DuPhHs_AaMlOHVwfnHWEL7is5lV3RTyYlJSDvOy58-q-OyCm5bSOU71csOHyaKQ=s176-c-k-c0x00ffffff-no-rj',
        title : 'VFX Artists React to Bad & Great CGi 9',
        channelName: 'Corridor Crew',
        views: '6.7M',
        time : '3 years'
    },
    {
        thumbnail : 'https://i.ytimg.com/vi/YjYsjyu7TIY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBNLuOheAZSFFZQUDo_vSFpvga2vg', 
        duration : '4:39', 
        profile: 'https://yt3.googleusercontent.com/ytc/AOPolaRbWvcPuAZMiqeKn637mEoXt2qZg-z1Aic6mFg=s176-c-k-c0x00ffffff-no-rj',
        title : 'Wednesday Playing Cello Theme | Paint It Black - The Rolling Stones (Episode 1 Soundtrack Netflix)',
        channelName: 'Krutikov Music',
        views: '5.8M',
        time : '8 months'
    },
    {
        thumbnail : 'https://i.ytimg.com/vi/0e3GPea1Tyg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD97HrPD21P7TSwUSpdGr2vz7i7cg', 
        duration : '25:42', 
        profile: 'https://yt3.googleusercontent.com/ytc/AOPolaSe-ifBRtdfb67uDM8kaHdhdPdQny-MaSRdBfT2NA=s176-c-k-c0x00ffffff-no-rj',
        title : '$456,000 Squid Game In Real Life!',
        channelName: 'MrBeast',
        views: '469M',
        time : '1 year'
    },
    {
        thumbnail : 'https://i.ytimg.com/vi/nk0qACYkbQM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCxAA5VdczKRj0edUtijLRdzLJP4A', 
        duration : '15:34', 
        profile: 'https://yt3.googleusercontent.com/enyLBm1Sy8mVRXJJLWHT2z64nqxJGt2g61A9xnxpUjO2YAUovHaY_JT3rnAg0j6Qij9iaHQlAg=s176-c-k-c0x00ffffff-no-rj',
        title : 'Nothing Phone (2) Impressions ft Nothing CEO!',
        channelName: 'Mrwhosetheboss',
        views: '2.7M',
        time : '2 weeks'
    },
    {
        thumbnail : 'https://i.ytimg.com/vi/0fA8J1UyT6I/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBaykf02_5xrw5BkGU7KLh4Q1tdYw', 
        duration : '16:33', 
        profile: 'https://yt3.googleusercontent.com/ytc/AOPolaQnQusYXzxBd2-knQxbeFiCWZ_dfPdX0Mu5v_oQcg=s176-c-k-c0x00ffffff-no-rj',
        title : 'Incredible Hidden Details in Spider-Man: Across The Spider-Verse (Part 3)',
        channelName: 'The Canadian Lad',
        views: '850k',
        time : '8 days'
    },
    {
        thumbnail : 'https://i.ytimg.com/vi/CGjKO_F6y9g/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIpcMuo9sN9S1rt0lU6on23YoPpw', 
        duration : '11:45', 
        profile: 'https://yt3.googleusercontent.com/ytc/AOPolaRHeytO1y7AbKLw3UyJFoIAMydxKNnuz2Y-gVi4iw=s176-c-k-c0x00ffffff-no-rj',
        title : 'Can I Build a SHIPWRECK in ROBLOX?! | Theme Park Tycoon 2 • #38',
        channelName: "Benji's Adventures",
        views: '38k',
        time : '2 days'
    },
    {
        thumbnail : 'https://i.ytimg.com/vi/ejoEUpUSIiU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCTe-27OKAFkYPRssdqMkVWZKbNmA', 
        duration : '3:42', 
        profile: 'https://yt3.ggpht.com/9QBOD8JbiG7_HHZj7TUOtTriUcAefAWxtBRaun832mE4y_OCzIcLq8Lf_3yWshHiwPePhPznTQ=s88-c-k-c0x00ffffff-no-rj',
        title : 'Loki Theme | EPIC GLORIOUS VERSION (Loki Soundtrack Cover)',
        channelName: 'Samuel Kim Music',
        views: '5.9M',
        time : '2 years'
    },
    {
        thumbnail : 'https://i.ytimg.com/vi/705XCEruZFs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA2oEKcrIi5CpR9mpcL-JFu_wkwYA', 
        duration : '11:37', 
        profile: 'https://yt3.ggpht.com/ytc/AOPolaQ2iMmw9cWFFjnwa13nBwtZQbl-AqGYkkiTqNaTLg=s68-c-k-c0x00ffffff-no-rj',
        title : 'The Joy of CSS Grid - Build 3 Beautifully Simple Responsive Layouts',
        channelName: 'Fireship',
        views: '405k',
        time : '3 years'
    },
    { 
        thumbnail : 'https://i.ytimg.com/vi/vgjSrJ022lo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAAV7r0Pyh0-zxpBR-QxM2aQYHHwQ', 
        duration : '11:54', 
        profile: 'https://yt3.googleusercontent.com/ytc/AOPolaRHeytO1y7AbKLw3UyJFoIAMydxKNnuz2Y-gVi4iw=s176-c-k-c0x00ffffff-no-rj',
        title : "MINOTAUR'S MOST SAVAGE FIGHTS! | BattleBots",
        channelName: 'BattleBots',
        views: '9.8M ',
        time : '1 year'
    }
]

const generateCard = (thumbnail, duration, profile, title, channelName, views, time) => {
    
    const card = document.createElement("div");
    card.classList.add('card');

    card.innerHTML = `<div class="thumbnail"><img src="${thumbnail}"alt="Thumbnail"><div class="duration">${duration}</div></div><div class="content"><div class="profile-pic"><img src="${profile}"alt="profile"></div><span class="title">${title}</span><span class="channel-name">${channelName}</span><span class="views">${views} views . <span class="time">${time} ago</span></span></div>`

    return card;
}

cards.forEach((card) => {
    const finalCard = generateCard(card.thumbnail, card.duration, card.profile, card.title, card.channelName, card.views, card.time);
    cardContainer.appendChild(finalCard);
});



const generateSidebarItem = (profile, channelName) => {
    
    const item = document.createElement("li");

    item.innerHTML = `<a href="#"><span class="subscription-item-icon"><img src="${profile}" alt="image"></span><span class="subscription-item-title"> ${channelName} </span> </a>`

    return item;
}
cards.forEach((card) => {
    const item = generateSidebarItem(card.profile, card.channelName);
    sidebarSubscriptions.appendChild(item);
})