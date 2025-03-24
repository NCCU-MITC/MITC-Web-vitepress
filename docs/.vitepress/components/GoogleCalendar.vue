<template>
  <div class="calendar-container">
    <div v-if="customMode">
      <h2>🗓 我的日曆事件</h2>

      <div v-if="loading" class="status">載入中...</div>
      <div v-else-if="error" class="status error">{{ error }}</div>
      <div v-else-if="events.length === 0" class="status">目前沒有即將到來的事件。</div>
      
      <div v-else class="events">
        <div class="event-card" v-for="event in events" :key="event.id">
          <h3>{{ event.summary || '（無標題）' }}</h3>
          <p class="time">{{ formatEventTime(event) }}</p>
          <p v-if="event.location" class="location">📍 {{ event.location }}</p>
          <a
            v-if="event.htmlLink"
            :href="event.htmlLink"
            target="_blank"
            rel="noopener"
            class="link"
          >🔗 查看詳細</a>
        </div>
      </div>
    </div>

    <iframe
      v-else
      src="https://calendar.google.com/calendar/embed?src=M2MyNzc4MWE2YmMyNWU0ZDAwZWUyZmU5OWNmNzY0M2RkMGFmMjJhMDI3ZjdmZDdiYzg0ZTkwYTljMzc2OWIyYkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&ctz=Asia/Taipei"
      style="border: 0"
      width="800"
      height="600"
      frameborder="0"
      scrolling="no"
    ></iframe>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      customMode: true,
      events: [],
      loading: false,
      error: '',
      calendarId: 'bbbe40785572a41fb2723ac96c0ba66a8ed587d008f647f128da43414567a867@group.calendar.google.com',
      apiKey: 'AIzaSyBbOxYqeUEb2fn2-LeAaAcVmr_JkXFgJZw'
    }
  },
  mounted() {
    if (this.customMode && typeof window !== 'undefined') {
      this.fetchEvents()
    }
  },
  methods: {
    async fetchEvents() {
      this.loading = true
      this.error = ''
      const timeMin = new Date().toISOString()
      const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(this.calendarId)}/events?key=${this.apiKey}&timeMin=${timeMin}&singleEvents=true&orderBy=startTime`

      try {
        const response = await axios.get(url)
        this.events = response.data.items
      } catch (err) {
        console.error('Error fetching events:', err)
        this.error = '無法取得日曆事件，請稍後再試。'
      } finally {
        this.loading = false
      }
    },
    formatEventTime(event) {
      const options = { timeZone: 'Asia/Taipei', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }
      if (event.start?.dateTime) {
        return new Date(event.start.dateTime).toLocaleString('zh-TW', options)
      } else if (event.start?.date) {
        return new Date(event.start.date).toLocaleDateString('zh-TW', { timeZone: 'Asia/Taipei' }) + '（全天）'
      } else {
        return '未定時間'
      }
    }
  }
}
</script>

<style scoped>
.calendar-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  flex-direction: column;
  padding: 1rem;
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}

.status {
  font-size: 1.2rem;
  color: #666;
}

.status.error {
  color: #d33;
}

.events {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  width: 100%;
  max-width: 960px;
}

.event-card {
  background: #f9f9f9;
  border-left: 6px solid #4285f4;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.06);
  transition: transform 0.2s ease;
}

.event-card:hover {
  transform: translateY(-4px);
}

.event-card h3 {
  margin: 0;
  font-size: 1.2rem;
  color: #333;
}

.event-card .time {
  font-size: 0.95rem;
  color: #555;
  margin: 0.5rem 0;
}

.event-card .location {
  font-size: 0.9rem;
  color: #777;
}

.event-card .link {
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #1a73e8;
  text-decoration: none;
}

.event-card .link:hover {
  text-decoration: underline;
}
</style>
