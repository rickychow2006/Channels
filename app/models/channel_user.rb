class ChannelUser < ApplicationRecord
  validates :channel_id, uniqueness: { scope: :user_id}
  validates :channel_id, :user_id, presence: true

  belongs_to :user,
  foregin_key: :user_id,
  class_name: :User

  belongs :channel,
  foregin_key: :channel_id,
  class_name: :Channel
end
